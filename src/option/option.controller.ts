import { Body, Controller, Post } from '@nestjs/common';
import { QuestionService } from 'src/question/question.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionService } from './option.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );
    const option = await this.optionService.createOption(
      createOption,
      question,
    );

    return { question, createOption, option };
  }
}
