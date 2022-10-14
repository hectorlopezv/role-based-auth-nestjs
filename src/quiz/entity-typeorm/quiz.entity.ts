import { Question } from 'src/question/entity-typeorm/questions.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Quiz ID' })
  id: number;

  @Column({ comment: 'Quiz Title', type: 'varchar', unique: true })
  title: string;

  @Column({ comment: 'Quiz Description', type: 'text' })
  description: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
