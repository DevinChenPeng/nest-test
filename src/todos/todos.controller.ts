import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  TodoApiResponseDto,
  TodoListApiResponseDto,
} from '../common/dto/api-response.dto';

@ApiTags('待办事项')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: '创建待办事项' })
  @ApiBody({ type: CreateTodoDto })
  @ApiCreatedResponse({
    description: '创建成功',
    type: TodoApiResponseDto,
  })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: '获取待办事项列表' })
  @ApiOkResponse({
    description: '获取成功',
    type: TodoListApiResponseDto,
  })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取单个待办事项' })
  @ApiParam({ name: 'id', description: '待办事项 ID' })
  @ApiOkResponse({
    description: '获取成功',
    type: TodoApiResponseDto,
  })
  @ApiNotFoundResponse({ description: '待办事项不存在' })
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新待办事项' })
  @ApiParam({ name: 'id', description: '待办事项 ID' })
  @ApiBody({ type: UpdateTodoDto })
  @ApiOkResponse({ description: '更新成功' })
  @ApiNotFoundResponse({ description: '待办事项不存在' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除待办事项' })
  @ApiParam({ name: 'id', description: '待办事项 ID' })
  @ApiOkResponse({ description: '删除成功' })
  @ApiNotFoundResponse({ description: '待办事项不存在' })
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
