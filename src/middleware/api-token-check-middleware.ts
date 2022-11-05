import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenPayment } from 'src/exceptions/api-token.expection';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'mytoken') {
      throw new ApiTokenPayment();
    }
    next();
  }
}
