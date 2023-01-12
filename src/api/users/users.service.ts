import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { z } from 'zod';
import type { adminBodySchema } from '../admin/admin.schema';
import process from 'process';
import * as bcrypt from 'bcrypt';
import { userResSchema } from './users.schema';

const roles = {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN',
} as const;
type Roles = typeof roles;
type RolesValue = Roles[keyof Roles];

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(role: RolesValue, body: z.output<typeof adminBodySchema>) {
    return this.prisma.user.create({
      data: {
        ...body,
        password: await this.hashPassword(body.password),
        birth: body.birth.toISOString(),
        role: 'ADMIN',
      },
    }).then(userResSchema.parse);
  }

  private salt = Number(process.env.SALT);
  async hashPassword(pass: string) {
    return bcrypt.hash(pass, this.salt);
  }
}
