import { ConflictException, NotFoundException } from '@nestjs/common';

/** 用户模块的业务异常工厂，集中维护异常类型与对外消息。 */
export class UserExceptions {
  static alreadyExists(): ConflictException {
    return new ConflictException('用户已存在');
  }

  static notFound(): NotFoundException {
    return new NotFoundException('用户不存在');
  }
}
