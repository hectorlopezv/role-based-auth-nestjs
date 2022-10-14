import * as bcrypt from 'bcrypt';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Quiz ID' })
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  testField: string;

  @Column({ comment: 'User Email', unique: true })
  email: string;

  @Column({ comment: 'User Password' })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(200);
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
