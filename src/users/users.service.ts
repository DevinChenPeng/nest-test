import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepo.create(dto);
    await this.em.persist(user).flush();
    return user;
  }

  async findAll({ page = 1, pageSize = 10 }: QueryUserDto) {
    const [items, total] = await this.usersRepo.findAndCount(
      {},
      {
        orderBy: { id: 'desc' },
        limit: pageSize,
        offset: (page - 1) * pageSize,
      },
    );
    return { items, total, page, pageSize };
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepo.findOne({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
}
