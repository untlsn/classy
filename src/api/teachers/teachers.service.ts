import { Injectable } from '@nestjs/common';
import type { z } from 'zod';
import { PrismaService } from '../../prisma/prisma.service';
import { PaginationService } from '../../pagination/pagination.service';
import type { teachersBodySchema } from './teachers.schema';
import { teachersResSchema } from './teachers.schema';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService, private pagination: PaginationService) {}

  create(data: z.output<typeof teachersBodySchema>) {
    return this.prisma.teacher.create({
      data: {
        user: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
            birth: data.birth.toISOString(),
            role: 'TEACHER',
          },
        },
      },
      include: { user: true },
    }).then(teachersResSchema.parse);
  }

  async findAll(page: number, limit: number, cursor: number) {
    return this.pagination.createPage(
      this.prisma.teacher.count(),
      (options) => (
        this.prisma.teacher.findMany({
          include: {
            user: true,
          },
          ...options,
        }).then(teachersResSchema.array().parse)
      ),
      { page, limit, cursor },
    );
  }

  findOne(id: number) {
    return this.prisma.teacher.findUnique({
      where: { id },
    }).then(teachersResSchema.parse);
  }

  update(id: number, data: z.output<typeof teachersBodySchema>) {
    return this.prisma.teacher.update({
      where: { id },
      data: {
        user: {
          update: {
            firstName: data.firstName,
            lastName: data.lastName,
            birth: data.birth.toISOString(),
          },
        },
      },
    }).then(teachersResSchema.parse);
  }

  async remove(id: number) {
    const removedTeacher = await this.prisma.teacher.delete({
      where: { id },
    }).then();

    this.prisma.user.delete({
      where: { id: removedTeacher.userId },
    });

    return removedTeacher;
  }
}
