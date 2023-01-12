import { z } from 'zod';
import dateFormat from '../../helpers/dateFormat';

export const userResSchema = z.object({
  id: z.number(),
  role: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  birth: z.string().transform(dateFormat),
  email: z.string(),
});
