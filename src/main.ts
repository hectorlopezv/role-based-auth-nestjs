import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Quiz role base Auth example')
    .setDescription('The quiz API description')
    .setVersion('1.0')
    .addTag('Quiz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Quiz', app, document);
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
