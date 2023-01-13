import { z } from 'zod';

export const loginBodySchema = z.object({
  email: z.string({
    required_error: 'Email jest wymagany',
  }).email('Email ma zły format'),
  password: z.string({
    required_error: 'Hasło jest wymagane',
  }).min(1, 'Hasło jest wymanage'),
});
