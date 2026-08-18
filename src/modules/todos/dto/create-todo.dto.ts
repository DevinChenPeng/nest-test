import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: '待办事项标题',
    example: '学习 NestJS',
    minLength: 1,
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  title!: string;

  @ApiProperty({
    description: '待办事项内容',
    example: '完成 Swagger 文档接入，并输出到 Apifox。',
    minLength: 1,
    maxLength: 65535,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 65535)
  content!: string;

  @ApiProperty({
    description: '是否已完成',
    example: false,
  })
  @IsBoolean()
  done!: boolean;
}
