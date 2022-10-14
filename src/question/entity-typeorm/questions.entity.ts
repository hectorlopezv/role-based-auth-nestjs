import { Option } from 'src/option/entity-typeorm/option.entity';
import { Quiz } from 'src/quiz/entity-typeorm/quiz.entity';
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

  @Column({ type: 'varchar' })
  question: string;
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
