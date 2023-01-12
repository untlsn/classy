import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import type { z } from 'zod';
import type { classesBodySchema } from '~/api/classes/teachers.schema';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  create(body: z.output<typeof classesBodySchema>) {
    return this.prisma.class.create({
      data: {
        name: body.name,
        tutorId: body.tutorId,
        ...body.studentsId ? {
          students: {
            connect: body.studentsId.map((id) => ({ id })),
          },
        } : undefined,
      },
    });
  }

  getAll() {
    return this.prisma.class.findMany();
  }

  getById(id: number) {
    return this.prisma.class.findUnique({ where: { id } });
  }

  update(id: number, body: z.output<typeof classesBodySchema>) {
    return this.prisma.class.update({
      where: { id },
      data: {
        name: body.name,
        tutorId: body.tutorId,
        ...body.studentsId ? {
          students: {
            connect: body.studentsId.map((id) => ({ id })),
          },
        } : undefined,
      },
    });
  }

  delete(id: number) {
    return this.prisma.class.delete({ where: { id } });
  }
}
