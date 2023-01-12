import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { z } from 'zod';
import { adminBodySchema } from './admin.schema';
import { ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { singleZod } from '../../helpers/singleExample';
import { UsersService } from '../users/users.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly users: UsersService) {}


  @Post()
  @UsePipes(new ZodValidationPipe(adminBodySchema))
  @ApiOperation({ summary: 'Create new admin' })
  @ApiBody(singleZod(adminBodySchema, {
    firstName: 'Imie',
    lastName: 'Nazwisko',
    birth: '2000-01-30',
    email: 'email@example.pl',
    password: 'password',
  }))
  create(@Body() body: z.output<typeof adminBodySchema>) {
    return this.users.create('ADMIN', body);
  }
}
