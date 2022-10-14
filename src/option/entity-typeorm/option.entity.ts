import { Question } from 'src/question/entity-typeorm/questions.entity';
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
  @Column({ type: 'varchar' })
  text: string;
  @Column({ type: 'boolean' })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
