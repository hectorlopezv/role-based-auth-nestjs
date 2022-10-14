import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Option } from './src/option/entity-typeorm/option.entity';
import PostEntity from './src/post.entity';
import { Question } from './src/question/entity-typeorm/questions.entity';
import { Quiz } from './src/quiz/entity-typeorm/quiz.entity';
import { User } from './src/user/entity-typeorm/user.entity';
config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Quiz, PostEntity, Option, Question, User],
  migrations: [],
});
