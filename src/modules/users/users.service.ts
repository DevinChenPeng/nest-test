import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User, UserSchema } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(UserSchema)
    private readonly userRepository: EntityRepository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    if (user) {
      throw new Error('User already exists');
    }
    // Create a new user entity and persist it to the database
    const newUser = this.userRepository.create(createUserDto);
    this.em.persist(newUser);
    await this.em.flush();
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new Error('User not found');
    }
    this.userRepository.assign(user, updateUserDto);
    await this.em.flush();
    return user;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
