import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({})
  @IsString()
  @IsNotEmpty({ message: 'Please enter a title' })
  @Length(3, 20, { message: 'Title must be between 3 and 20 characters' })
  title: string;

  @ApiProperty({})
  @IsString()
  @IsNotEmpty({ message: 'Please enter a description' })
  @Length(3, 40, { message: 'Description must be between 3 and 40 characters' })
  description: string;
}
