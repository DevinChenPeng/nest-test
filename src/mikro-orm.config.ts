import { defineConfig } from '@mikro-orm/mysql';
import { Migrator } from '@mikro-orm/migrations';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { User } from './users/entities/user.entity';

export const mikroOrmConfig = defineConfig({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  dbName: process.env.DB_NAME ?? 'nest_test',
  entities: [User],
  metadataProvider: ReflectMetadataProvider,
  debug: process.env.NODE_ENV !== 'production',
  extensions: [Migrator],
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
});
