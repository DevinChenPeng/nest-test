import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { TodoFactory } from './todo.factory';

export class TodoSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    await new TodoFactory(em).create(10);
    console.log('已初始化 10 条 Todo 数据。');
  }
}
