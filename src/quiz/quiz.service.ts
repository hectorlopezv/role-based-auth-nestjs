import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz-db/entity-typeorm/quiz.entity';
import { Repository } from 'typeorm';

import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz(): Promise<[Quiz[], number]> {
    return this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'question')
      .leftJoinAndSelect('question.options', 'option')
      .getManyAndCount();
  }
  createQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    return this.quizRepository.save(quizData);
  }

  getQuizById(id: number): Promise<Quiz> {
    return this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }
}
