import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

/** 认证模块的业务异常工厂，集中维护异常类型与对外消息。 */
export class AuthExceptions {
  static userAlreadyExists(): ConflictException {
    return new ConflictException('用户已存在');
  }

  static invalidCredentials(): UnauthorizedException {
    return new UnauthorizedException('邮箱或密码错误');
  }

  static userCreationFailed(): InternalServerErrorException {
    return new InternalServerErrorException('创建用户失败');
  }

  static invalidLoginRequest(): UnauthorizedException {
    return new UnauthorizedException('登录请求无效或已过期');
  }

  static rsaConfigurationMissing(): InternalServerErrorException {
    return new InternalServerErrorException('登录加密服务未配置');
  }
}
