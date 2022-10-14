import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authServive: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): Promise<any> {
    return this.authServive.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
