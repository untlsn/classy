import { z } from 'zod';
import dayjs from 'dayjs';
import dateFormat from '~/helpers/dateFormat';

export const teachersBodySchema = z.object({
  firstName: z.string({
    required_error: 'Imie jest wymagane',
  }),
  lastName: z.string({
    required_error: 'Nazwisko jest wymagane',
  }),
  birth: z.string({
    required_error: 'Data urodzenia jest wymagana',
  })
    .regex(/\d{4}-\d{2}-\d{2}/, 'Data jest w złym formacie (YYYY-MM-DD)')
    .transform((v) => dayjs.utc(v, 'YYYY-MM-DD')),
});

export const teachersResSchema = z.object({
  id: z.number(),
  user: z.object({
    id: z.number(),
    role: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    birth: z.date().transform(dateFormat),
  }),
});
