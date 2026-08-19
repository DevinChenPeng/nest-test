import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { hashPassword, verifyPassword } from '../../utils/password.util';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthExceptions } from '../../common/exceptions/auth.exception';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signUp(createUser: CreateUserDto): Promise<boolean> {
    const { email, password, name } = createUser;
    const user = await this.usersService.findOne(email);
    if (user?.email === email) {
      throw AuthExceptions.userAlreadyExists();
    }
    // Hash the password and create the user in the database
    const hashedPassword = await hashPassword(password);
    const createdUser = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!createdUser) {
      throw AuthExceptions.userCreationFailed();
    }
    return true;
  }

  /** 密码仅通过 HTTPS 传输，随后与数据库中的 bcrypt 哈希进行比对。 */
  async signIn({ email, password }: SignInDto): Promise<boolean> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw AuthExceptions.invalidCredentials();
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw AuthExceptions.invalidCredentials();
    }
    return true;
  }
}
