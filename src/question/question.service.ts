import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/entity-typeorm/questions.entity';
import { Quiz } from 'src/quiz/entity-typeorm/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }
  findQuestionById(id: number) {
    return this.questionRepository.findOne({
      where: { id },
      relations: ['quiz', 'option'],
    });
  }
}
