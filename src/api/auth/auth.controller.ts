import { Body, Controller, Get, Post, UnauthorizedException, UseGuards, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { singleZod } from '../../helpers/singleExample';
import { loginBodySchema } from './auth.schema';
import { z } from 'zod';
import { JwtUser, JwtUserPayload } from '../../decorators/JwtUser.decorator';
import { JwtAuthGuard } from './jwt.guard';
import { UsersService } from '../users/users.service';

@Controller('api/auth')
export class AuthController {
  constructor(private auth: AuthService, private users: UsersService) {}


  @Post()
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  @ApiOperation({ summary: 'Return user and auth token' })
  @ApiBody(singleZod(loginBodySchema, {
    email: 'email@example.pl',
    password: 'password',
  }))
  async login(@Body() { email, password }: z.output<typeof loginBodySchema>) {
    const user = await this.auth.validateUser(email, password);

    return {
      user,
      token: this.auth.login(user),
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async jwtAuth(@JwtUser() user: JwtUserPayload) {
    const res = await this.users.findOneById(user.userId);
    if (!res) throw new UnauthorizedException('Token odwołuje się do nieistniejącego użytkownika');
    return res;
  }
}
