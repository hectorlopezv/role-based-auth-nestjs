import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AdminRoleGuard } from 'src/auth/guards/roles/admin/admin.role.guard';
import { Roles } from 'src/auth/guards/roles/decorator/roles.setmetadata';
import { RolesGuard } from 'src/auth/guards/roles/dynamic/dynamic.roles.guard';
import { Quiz } from 'src/quiz/quiz-db/entity-typeorm/quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/')
  @ApiCreatedResponse({
    description: 'Get All Quizes',
    type: [Quiz],
  })
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Get('/:id')
  @ApiCreatedResponse({
    description: 'Get Quiz',
    type: Quiz,
  })
  @UseGuards(RolesGuard)
  getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id);
  }
  @Post('/create')
  @HttpCode(200)
  @ApiCreatedResponse({
    description: 'Quiz has been successfully registered',
    type: Quiz,
  })
  @UseGuards(AdminRoleGuard)
  @Roles('admin', 'members')
  createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createQuiz(quizData);
  }
}
