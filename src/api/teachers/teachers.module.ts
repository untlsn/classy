import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PrismaService } from '~/prisma/prisma.service';
import { PaginationService } from '~/pagination/pagination.service';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService, PrismaService, PaginationService],
})
export class TeachersModule {}
