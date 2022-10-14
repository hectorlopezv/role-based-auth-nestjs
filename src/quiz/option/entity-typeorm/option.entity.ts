import { ApiProperty } from '@nestjs/swagger';
import { Question } from 'src/quiz/question/entity-typeorm/questions.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('options')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Option ID' })
  id: number;

  @ApiProperty({})
  @Column({ type: 'varchar' })
  text: string;

  @ApiProperty({})
  @Column({ type: 'boolean' })
  isCorrect: boolean;

  @ApiProperty({ type: () => Question, enumName: 'question', isArray: false })
  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
