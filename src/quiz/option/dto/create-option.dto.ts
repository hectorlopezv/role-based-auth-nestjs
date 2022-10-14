import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({})
  @IsString()
  @IsNotEmpty({ message: 'Please enter a text' })
  @Length(2, 255, {
    message: 'text Option must be between 3 and 255 characters',
  })
  text: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @ApiProperty({})
  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;
}
