import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '用户邮箱',
    example: 'user@example.com',
    maxLength: 255,
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    description: '用户密码',
    example: 'Password123',
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @IsNotEmpty()
  @Length(8, 72)
  password!: string;

  @ApiProperty({
    description: '用户名称',
    example: '张三',
    minLength: 1,
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name!: string;
}
