import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { LoggerModule } from 'nestjs-pino';
import { mikroOrmConfig } from './configs/mikro-orm.config';
import { TodosModule } from './modules/todos/todos.module';
import { pinoHttpConfig } from './configs/log.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({
      pinoHttp: pinoHttpConfig,
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    TodosModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
