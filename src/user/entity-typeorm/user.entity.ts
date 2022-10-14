import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({})
  @Column()
  name: string;

  @ApiProperty({})
  @Column({ comment: 'User Email', unique: true })
  email: string;

  @ApiProperty({})
  @Column({ comment: 'User Password' })
  password: string;

  @ApiProperty({})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({})
  @CreateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(200);
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
