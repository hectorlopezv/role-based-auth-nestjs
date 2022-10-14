import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Option } from './src/quiz/option/entity-typeorm/option.entity';
import { Question } from './src/quiz/question/entity-typeorm/questions.entity';
import { Quiz } from './src/quiz/quiz-db/entity-typeorm/quiz.entity';
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
  entities: [Quiz, Option, Question, User],
  migrations: [],
});
