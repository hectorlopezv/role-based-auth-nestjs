import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Post()
  saveQuestion(@Body() question: CreateQuestionDto) {
    return this.questionService.createQuestion(question);
  }
}
