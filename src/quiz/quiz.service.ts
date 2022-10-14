import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './entity-typeorm/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz() {
    return 'ok';
  }
  createQuiz(quizData: CreateQuizDto) {
    return this.quizRepository.save(quizData);
  }

  getQuizById(id: number): Promise<Quiz> {
    return this.quizRepository.findOne({ where: { id } });
  }
}
