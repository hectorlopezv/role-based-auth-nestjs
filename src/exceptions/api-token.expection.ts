import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPayment extends HttpException {
  constructor() {
    super('the api token is invalid', HttpStatus.PAYMENT_REQUIRED);
  }
}
