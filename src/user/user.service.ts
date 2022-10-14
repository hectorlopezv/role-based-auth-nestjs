import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from './dto/user-register.red.dto';
import { User } from './entity-typeorm/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) userRepository: Repository<User>) {}

  async registration(userRegister: UserRegisterRequestDto): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return user.save();
  }

  async getUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }
}
