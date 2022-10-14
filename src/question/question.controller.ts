import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/entity-typeorm/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  @Post()
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizRepository.findOne({
      where: { id: question.quizId },
      relations: ['questions'],
    });
    return this.questionService.createQuestion(question, quiz);
  }
}
