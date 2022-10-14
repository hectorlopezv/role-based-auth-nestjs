import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../question/entity-typeorm/questions.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity-typeorm/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}

  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });
    question.options = [...question.options, newOption];
    await question.save();
    return newOption;
  }
}
