import { Controller, Post, Body, UsePipes, ParseIntPipe, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { ZodValidationPipe } from 'nestjs-zod';
import { z } from 'zod';
import { ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { teachersBodySchema } from './teachers.schema';
import { singleZod } from '../../helpers/singleExample';

@Controller('api/teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  @ApiOperation({ summary: 'Get page of teachers' })
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
    return this.teachersService.findAll(
      +page,
      +limit,
      +cursor,
    );
  }
  @Post()
  @UsePipes(new ZodValidationPipe(teachersBodySchema))
  @ApiOperation({ summary: 'Create new teacher' })
  @ApiBody(singleZod(teachersBodySchema, {
    firstName: 'Imie',
    lastName: 'Nazwisko',
    birth: '2000-01-30',
    email: 'email@example.pl',
    password: 'password',
  }))
  create(@Body() body: z.output<typeof teachersBodySchema>) {
    return this.teachersService.create(body);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get teacher by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(teachersBodySchema))
  @ApiOperation({ summary: 'Update teacher bt id' })
  @ApiBody(singleZod(teachersBodySchema, {
    firstName: 'Imie',
    lastName: 'Nazwisko',
    birth: '2000-01-30',
  }))
  update(@Param('id', ParseIntPipe) id: number, @Body() body: z.input<typeof teachersBodySchema>) {
    return this.teachersService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(+id);
  }
}
