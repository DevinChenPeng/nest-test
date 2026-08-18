import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
