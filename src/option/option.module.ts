import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from 'src/question/question.module';
import { Option } from './entity-typeorm/option.entity';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option]), QuestionModule],
  exports: [TypeOrmModule],
  providers: [OptionService],
  controllers: [OptionController],
})
export class OptionModule {}
