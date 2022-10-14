import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({ type: () => [String] })
  @IsString()
  @IsNotEmpty({ message: 'Please enter a question' })
  @Length(3, 255, { message: 'question must be between 3 and 255 characters' })
  question: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  quizId: number;
}
