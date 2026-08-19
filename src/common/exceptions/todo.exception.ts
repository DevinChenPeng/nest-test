import { NotFoundException } from '@nestjs/common';

/** 待办模块的业务异常工厂，集中维护异常类型与对外消息。 */
export class TodoExceptions {
  static notFound(): NotFoundException {
    return new NotFoundException('待办事项不存在');
  }
}
