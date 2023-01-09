import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      ignoreTrailingSlash: true,
    }),
  );

  const documentBuilder = new DocumentBuilder()
    .setTitle('Nest Template')
    .setDescription('My template for Nestjs')
    .setVersion('1.0')
    .build();

  SwaggerModule.setup(
    'swagger',
    app,
    SwaggerModule.createDocument(app, documentBuilder),
  );

  await app.listen(Number(process.env.NEST_PORT));
}
bootstrap();
