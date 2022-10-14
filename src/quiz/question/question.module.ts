import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizDbModule } from 'src/quiz/quiz-db/quiz-db.module';
import { Question } from './entity-typeorm/questions.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), QuizDbModule],
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [TypeOrmModule, QuestionService],
})
export class QuestionModule {}
