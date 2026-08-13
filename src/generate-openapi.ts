import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { writeSwaggerDocument } from './configs/swagger.config';
import { SwaggerAppModule } from './swagger/swagger-app.module';

async function generateOpenApi() {
  const app = await NestFactory.create<NestFastifyApplication>(
    SwaggerAppModule,
    new FastifyAdapter(),
    { logger: false },
  );

  const outputPath = writeSwaggerDocument(
    app,
    process.argv[2] ?? 'openapi.json',
  );
  await app.close();

  console.log(`Swagger JSON written to: ${outputPath}`);
}

void generateOpenApi();
