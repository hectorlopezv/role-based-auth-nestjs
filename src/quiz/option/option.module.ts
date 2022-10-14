import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionQueriesModule } from 'src/quiz/question-queries/question-queries.module';
import { Option } from './entity-typeorm/option.entity';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option]), QuestionQueriesModule],
  exports: [TypeOrmModule],
  providers: [OptionService],
  controllers: [OptionController],
})
export class OptionModule {}
