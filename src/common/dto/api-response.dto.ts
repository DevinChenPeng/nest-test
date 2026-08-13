import { ApiProperty } from '@nestjs/swagger';
import {
  ApiResponseCode,
  ApiResponseResult,
} from '../interfaces/api-response.interface';
import { TodoDto } from '../../todos/dto/todo-response.dto';

export class TodoApiResponseDto {
  @ApiProperty({
    description: '业务状态码',
    enum: ApiResponseCode,
    example: ApiResponseCode.SUCCESS,
  })
  code!: ApiResponseCode;

  @ApiProperty({
    description: '业务结果',
    enum: ApiResponseResult,
    example: ApiResponseResult.SUCCESS,
  })
  result!: ApiResponseResult;

  @ApiProperty({
    description: '业务数据',
    type: TodoDto,
  })
  data!: TodoDto;

  @ApiProperty({
    description: '业务消息，成功时通常为 null',
    type: String,
    nullable: true,
    example: null,
  })
  message!: string | null;

  @ApiProperty({
    description: '响应时间',
    type: String,
    format: 'date-time',
    example: '2026-08-13T06:00:00.000Z',
  })
  timestamp!: string;
}

export class TodoListApiResponseDto {
  @ApiProperty({
    description: '业务状态码',
    enum: ApiResponseCode,
    example: ApiResponseCode.SUCCESS,
  })
  code!: ApiResponseCode;

  @ApiProperty({
    description: '业务结果',
    enum: ApiResponseResult,
    example: ApiResponseResult.SUCCESS,
  })
  result!: ApiResponseResult;

  @ApiProperty({
    description: '待办事项列表',
    type: [TodoDto],
  })
  data!: TodoDto[];

  @ApiProperty({
    description: '业务消息，成功时通常为 null',
    type: String,
    nullable: true,
    example: null,
  })
  message!: string | null;

  @ApiProperty({
    description: '响应时间',
    type: String,
    format: 'date-time',
    example: '2026-08-13T06:00:00.000Z',
  })
  timestamp!: string;
}
