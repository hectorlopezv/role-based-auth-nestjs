import {
  Body,
  Controller,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { UserRegisterRequestDto } from './dto/user-register.red.dto';
import { User } from './entity-typeorm/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'User has been successfully registered',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed',
  })
  registration(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    userRegister: UserRegisterRequestDto,
  ) {
    this.userService.registration(userRegister);
  }
}
