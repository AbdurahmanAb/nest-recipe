import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configDocument = new DocumentBuilder().setTitle('Recipes API').setDescription('Recipes API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, configDocument);

  SwaggerModule.setup('/docs', app, document);
    app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
