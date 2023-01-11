import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import type { z } from 'zod';
import type { teachersBodySchema } from '~/api/teachers/teachers.schema';
import { teachersResSchema } from '~/api/teachers/teachers.schema';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

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

  findAll() {
    return this.prisma.teacher.findMany({
      include: {
        user: true,
      },
    }).then(teachersResSchema.array().parse);
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
