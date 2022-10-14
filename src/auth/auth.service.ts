import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entity-typeorm/user.entity';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new BadRequestException();
    }

    const isValid = bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new BadRequestException();
    }
    return user;
  }

  async generateToken(user: User) {
    const access_token = this.jwtService.sign({
      name: user.name,
      sub: user.id,
    });

    return { access_token };
  }
}
