import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../modules/users/entities/user.entity';
import { hashPassword } from '../utils/password.util';

const DEFAULT_ADMIN_EMAIL = 'admin@example.com';

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const existingAdmin = await em.findOne(User, { name: 'admin' });

    if (existingAdmin) {
      console.log('默认管理员已存在，跳过创建。');
      return;
    }

    em.create(User, {
      name: 'admin',
      email: DEFAULT_ADMIN_EMAIL,
      password: await hashPassword('123456789'),
    });

    console.log('已创建默认管理员 admin。');
  }
}
