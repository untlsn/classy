import { z } from 'zod';
import dayjs from 'dayjs';

const minReqStr = (required_error: string) => z.string({
  required_error,
}).min(1, required_error);

export const adminBodySchema = z.object({
  firstName: minReqStr('Imie jest wymagane'),
  lastName: minReqStr('Nazwisko jest wymagane'),
  birth: z.string({
    required_error: 'Data narodzin jest wymagana',
  })
    .regex(/\d{4}-\d{2}-\d{2}/, 'Data narodzin jest wymagana')
    .transform((v) => dayjs.utc(v, 'YYYY-MM-DD')),
  email: minReqStr('Email jest wymagany').email('Email jest nieprawidłowy'),
  password: minReqStr('Hasło jest wymagane').min(8, 'Hasło jest za krótkie'),
});
