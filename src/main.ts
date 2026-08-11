import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true },
  );

  // 使用 pino 作为应用日志实现
  app.useLogger(app.get(Logger));

  // 全局参数校验与类型转换
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 剔除 DTO 中未声明的属性
      forbidNonWhitelisted: true, // 出现未声明属性时直接报错
      transform: true, // 自动将入参转换为 DTO 实例并完成类型转换
    }),
  );

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0');
}
void bootstrap();
