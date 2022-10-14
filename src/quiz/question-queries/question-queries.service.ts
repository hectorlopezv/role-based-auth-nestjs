import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/quiz/question/entity-typeorm/questions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionQueriesService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  findQuestionById(id: number) {
    return this.questionRepository.findOne({
      where: { id },
      relations: ['quiz', 'option'],
    });
  }
}
