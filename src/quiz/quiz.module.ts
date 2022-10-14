import { Module } from '@nestjs/common';
import { QuizDbModule } from 'src/quiz/quiz-db/quiz-db.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [QuizDbModule],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
