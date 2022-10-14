import { Module } from '@nestjs/common';
import { QuestionModule } from 'src/quiz/question/question.module';
import { QuestionQueriesService } from './question-queries.service';

@Module({
  imports: [QuestionModule],
  providers: [QuestionQueriesService],
  exports: [QuestionQueriesService],
})
export class QuestionQueriesModule {}
