import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz-db/entity-typeorm/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  exports: [TypeOrmModule],
})
export class QuizDbModule {}
