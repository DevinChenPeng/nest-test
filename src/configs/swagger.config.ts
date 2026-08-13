import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const SWAGGER_DOCS_PATH = 'docs';
export const SWAGGER_JSON_PATH = 'docs-json';

export function createSwaggerDocument(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('nest-test API')
    .setDescription('nest-test 服务接口文档')
    .setVersion('1.0.0')
    .addTag('待办事项', '待办事项管理接口')
    .build();

  return SwaggerModule.createDocument(app, config);
}

export function setupSwagger(app: INestApplication) {
  const document = createSwaggerDocument(app);

  SwaggerModule.setup(SWAGGER_DOCS_PATH, app, document, {
    jsonDocumentUrl: SWAGGER_JSON_PATH,
  });

  return document;
}

export function writeSwaggerDocument(
  app: INestApplication,
  outputPath = 'openapi.json',
) {
  const document = createSwaggerDocument(app);
  const targetPath = resolve(process.cwd(), outputPath);

  writeFileSync(targetPath, JSON.stringify(document, null, 2), 'utf8');

  return targetPath;
}
