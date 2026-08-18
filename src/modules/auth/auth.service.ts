import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { hashPassword } from '../../utils/password.util';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signUp(createUser: CreateUserDto): Promise<any> {
    const { email, password, name } = createUser;
    const user = await this.usersService.findOne(email);
    if (user?.email === email) {
      throw new UnauthorizedException('User already exists');
    }
    // Hash the password and create the user in the database
    const hashedPassword = await hashPassword(password);
    const createdUser = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!createdUser) {
      throw new UnauthorizedException('Failed to create user');
    }
    return true;
  }
}
