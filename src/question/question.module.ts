import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from 'src/quiz/quiz.module';
import { Question } from './entity-typeorm/questions.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), QuizModule],
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [TypeOrmModule, QuestionService],
})
export class QuestionModule {}
