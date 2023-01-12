import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { z } from 'zod';
import { classesBodySchema } from '~/api/classes/teachers.schema';
import { zodToOpenAPI, ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  @ApiOperation({ summary: 'Get page of classes' })
  getClasses() {
    return this.classesService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get class by id' })
  getClass(@Param('id', ParseIntPipe) id: number) {
    return this.classesService.getById(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(classesBodySchema))
  @ApiOperation({ summary: 'Create new class' })
  @ApiBody({
    schema: zodToOpenAPI(classesBodySchema),
    examples: {
      minimal: {
        value: {
          name: '1A',
        },
      },
      default: {
        value: {
          name: '1A',
          studentsId: [1, 2, 3],
          tutorId: 1,
        },
      },
    },
  })
  createClass(@Body() body: z.output<typeof classesBodySchema>) {
    return this.classesService.create(body);
  }


}
