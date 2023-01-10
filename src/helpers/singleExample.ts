import type { z, ZodObject } from 'zod';
import { zodToOpenAPI } from 'nestjs-zod';

const singleExample = <T>(example: T) => ({
  default: {
    value: example,
  },
});

export const singleZodExample = <Z extends ZodObject<any>>(schema: Z, example: z.input<Z>) => singleExample(example);

export const singleZod = <Z extends ZodObject<any>>(schema: Z, example: z.input<Z>) => ({
  schema: zodToOpenAPI(schema),
  examples: singleZodExample(schema, example),
});

export default singleExample;
