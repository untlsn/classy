import type { z } from 'zod';

type IdObject = z.ZodObject<{ id: any }>

const arrayRecord = <Z extends IdObject>(schema: Z) => asArrayRecord(
  schema.array(),
);

export const asArrayRecord = <Z extends z.ZodArray<IdObject>>(schema: Z) => (
  schema.transform(convertToArrayRecord)
);

export const convertToArrayRecord = <T>(arr: T[]) => Object.fromEntries(
  arr.map((v) => [v.id, v]),
);

export default arrayRecord;
