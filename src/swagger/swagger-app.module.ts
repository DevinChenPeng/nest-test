import { Module } from '@nestjs/common';
import { TodosController } from '../todos/todos.controller';
import { TodosService } from '../todos/todos.service';

/**
 * 仅用于生成 OpenAPI 文档的独立模块。
 * 不加载 MikroORM 根配置，因此不需要可用的数据库连接。
 */
@Module({
  controllers: [TodosController],
  providers: [{ provide: TodosService, useValue: {} }],
})
export class SwaggerAppModule {}
