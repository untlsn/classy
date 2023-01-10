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
        classId: data.classId,

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

  update(id: number) {
    return this.prisma.teacher.update({
      where: { id },
      data: {
        classId: data.classId,
        user: {
          update: {
            firstName: data.firstName,
            lastName: data.lastName,
            birth: data.birth,
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

    return {
      teacherId: removedTeacher.id,
      userId: removedTeacher.userId,
    };
  }
}
