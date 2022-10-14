import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionModule } from 'src/option/option.module';
import { Quiz } from './entity-typeorm/quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), OptionModule],
  providers: [QuizService],
  controllers: [QuizController],
  exports: [TypeOrmModule],
})
export class QuizModule {}
