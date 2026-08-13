import 'dotenv/config';
import { MikroORM } from '@mikro-orm/mysql';
import { mikroOrmConfig } from '../src/configs/mikro-orm.config';
import { TodoSeeder } from '../src/seeders/todo.seeder';

async function seed() {
  const orm = await MikroORM.init(mikroOrmConfig);

  try {
    await orm.migrator.up();
    await orm.seeder.seed(TodoSeeder);
  } finally {
    await orm.close(true);
  }
}

seed().catch((error: unknown) => {
  console.error('Todo seed 执行失败。', error);
  process.exitCode = 1;
});
