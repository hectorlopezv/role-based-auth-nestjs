import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Option } from 'src/quiz/option/entity-typeorm/option.entity';
import { Quiz } from 'src/quiz/quiz-db/entity-typeorm/quiz.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Question ID' })
  id: number;

  @ApiProperty({ type: () => 'text' })
  @Column({ type: 'varchar' })
  question: string;

  @ApiHideProperty()
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @ApiHideProperty()
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
