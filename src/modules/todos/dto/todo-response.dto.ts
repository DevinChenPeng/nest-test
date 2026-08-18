import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty({
    description: '待办事项 ID',
    example: 'f3f90b66-60b4-4e0b-a0f0-5d1d48959717',
  })
  id!: string;

  @ApiProperty({
    description: '待办事项标题',
    example: '学习 NestJS',
  })
  title!: string;

  @ApiProperty({
    description: '待办事项内容',
    example: '完成 Swagger 文档接入，并输出到 Apifox。',
  })
  content!: string;

  @ApiProperty({
    description: '是否已完成',
    example: false,
  })
  done!: boolean;

  @ApiProperty({
    description: '创建时间',
    type: String,
    format: 'date-time',
    example: '2026-08-13T06:00:00.000Z',
  })
  createdAt!: string;

  @ApiProperty({
    description: '更新时间',
    type: String,
    format: 'date-time',
    example: '2026-08-13T06:00:00.000Z',
  })
  updatedAt!: string;

  @ApiPropertyOptional({
    description: '删除时间，未删除时为 null',
    type: String,
    format: 'date-time',
    nullable: true,
    example: null,
  })
  deletedAt!: string | null;
}
