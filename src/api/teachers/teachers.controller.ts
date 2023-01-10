import { Controller, Post, Body, UsePipes, ParseIntPipe, Get, Param, Patch, Delete } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { ZodValidationPipe } from 'nestjs-zod';
import { z } from 'zod';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { singleZod } from '~/helpers/singleExample';
import { teachersBodySchema } from '~/api/teachers/teachers.schema';

@Controller('api/teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  @ApiOperation({ summary: 'Get page of teachers' })
  findAll() {
    return this.teachersService.findAll();
  }
  @Post()
  @UsePipes(new ZodValidationPipe(teachersBodySchema))
  @ApiOperation({ summary: 'Create new teacher' })
  @ApiBody(singleZod(teachersBodySchema, {
    firstName: 'Imie',
    lastName: 'Nazwisko',
    birth: '2000-01-30',
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
