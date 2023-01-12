import { Module } from '@nestjs/common';
import { TeachersModule } from '~/api/teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [TeachersModule, ClassesModule],
})
export class ApiModule {}
