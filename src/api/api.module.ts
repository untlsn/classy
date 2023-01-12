import { Module } from '@nestjs/common';
import { ClassesModule } from './classes/classes.module';
import { AuthModule } from './auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [TeachersModule, ClassesModule, AuthModule],
})
export class ApiModule {}
