import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import type { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async validateUser(email: string, pass: string) {
    const user = await this.users.findOneByEmail(email, true);

    if (!user) throw new NotFoundException('Email nie jest przypisany do żadnego uzytkownika');

    if (await bcrypt.compare(pass, user.password)) return this.users.prepareRes(user);

    throw new UnauthorizedException('Złe hasło');
  }

  login(user: User) {
    return this.jwt.sign({
      sub: user.id,
    });
  }
}
