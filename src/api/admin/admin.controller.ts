import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { z } from 'zod';
import { adminBodySchema } from './admin.schema';
import { ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { singleZod } from '../../helpers/singleExample';
import { UsersService } from '../users/users.service';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly users: UsersService) {}


  @Get()
  @ApiOperation({ summary: 'Get actors page' })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'cursor',
    type: Number,
    required: false,
  })
  findAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('cursor') cursor: string,
  ) {
    return this.users.findAll(
      'ADMIN',
      +page,
      +limit,
      +cursor,
    );
  }

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
