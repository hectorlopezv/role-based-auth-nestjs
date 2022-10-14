import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const PASSWORD_RULE_MESSAGE =
  'Password should have 1 upper case, lowcase letter along with a number and special character.';

export class UserRegisterRequestDto {
  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({})
  @IsOptional()
  testField: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @Length(8, 24)
  @Matches(PASSWORD_RULE, { message: PASSWORD_RULE_MESSAGE })
  password: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @Length(8, 24)
  @Matches(PASSWORD_RULE, { message: PASSWORD_RULE_MESSAGE })
  confirm: string;
}
