import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({ description: '用户邮箱', example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    description: '用户密码。仅可通过 HTTPS 传输，服务端不会记录明文。',
    format: 'password',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  password!: string;
}
