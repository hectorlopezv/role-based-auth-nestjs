import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { QuestionQueriesService } from 'src/quiz/question-queries/question-queries.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity-typeorm/option.entity';
import { OptionService } from './option.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,

    private readonly questionQueries: QuestionQueriesService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Option has been successfully registered',
    type: Option,
  })
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionQueries.findQuestionById(
      createOption.questionId,
    );
    const option = await this.optionService.createOption(
      createOption,
      question,
    );

    return { question, createOption, option };
  }
}
