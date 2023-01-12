import { z } from 'zod';


export const classesBodySchema = z.object({
  name: z.string({
    required_error: 'Nazwa klasy jest wymagana',
  }).min(1, 'Nazwa klasy nie może być pusta'),
  studentsId: z.number().array().optional(),
  tutorId: z.number().optional(),
});
