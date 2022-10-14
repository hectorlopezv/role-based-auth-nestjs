import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty({ message: 'Please enter a text' })
  @Length(3, 255, {
    message: 'text Option must be between 3 and 255 characters',
  })
  text: string;

  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;
}
