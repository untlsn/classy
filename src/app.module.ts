import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { PaginationModule } from './pagination/pagination.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ApiModule, PaginationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
