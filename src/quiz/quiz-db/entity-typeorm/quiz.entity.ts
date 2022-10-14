import { ApiProperty } from '@nestjs/swagger';
import { Question } from 'src/quiz/question/entity-typeorm/questions.entity';
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

  @ApiProperty({})
  @Column({ comment: 'Quiz Title', type: 'varchar', unique: true })
  title: string;

  @ApiProperty({})
  @Column({ comment: 'Quiz Description', type: 'text' })
  description: string;

  @ApiProperty({})
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty({
    type: () => [Question],
    enumName: 'question',
    isArray: true,
  })
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
