import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { z } from 'zod';
import type { adminBodySchema } from '../admin/admin.schema';
import process from 'process';
import * as bcrypt from 'bcrypt';
import { userResSchema } from './users.schema';
import { PaginationService } from '../../pagination/pagination.service';
import type { UserWhereUniqueInput } from '@prisma/client';

const roles = {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN',
} as const;
type Roles = typeof roles;
type RolesValue = Roles[keyof Roles];

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private pagination: PaginationService) {}

  async findOneBy(where: UserWhereUniqueInput, dirty?: boolean) {
    const res = this.prisma.user.findUnique({ where });

    return dirty
      ? res
      : res.then(userResSchema.parse);
  }

  findOneByEmail(email: string, dirty?: boolean) {
    return this.findOneBy({ email }, dirty);
  }
  findOneById(id: number, dirty?: boolean) {
    return this.findOneBy({ id }, dirty);
  }

  prepareRes(user: unknown) {
    return userResSchema.parse(user);
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

  async findAll(role: RolesValue, page: number, limit: number, cursor: number) {
    return this.pagination.createPage(
      this.prisma.user.count(),
      (options) => (
        this.prisma.user.findMany({
          where: { role },
          ...options,
        }).then(userResSchema.array().parse)
      ),
      { page, limit, cursor },
    );
  }

  private salt = Number(process.env.SALT);
  async hashPassword(pass: string) {
    return bcrypt.hash(pass, this.salt);
  }
}
