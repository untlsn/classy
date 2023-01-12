import { Module } from '@nestjs/common';
import { ClassesModule } from './classes/classes.module';
import { AuthModule } from './auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TeachersModule, ClassesModule, AuthModule, AdminModule],
})
export class ApiModule {}
