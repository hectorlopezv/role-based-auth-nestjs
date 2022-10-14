import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty({ message: 'Please enter a question' })
  @Length(3, 255, { message: 'question must be between 3 and 255 characters' })
  question: string;

  @IsNotEmpty()
  @IsNumber()
  quizId: number;
}
