const objIncludesKey = <K extends string>(value: unknown, key: K): value is Record<K, unknown> => (
  value &&
  typeof value == 'object' &&
  key in value
);

export default objIncludesKey;
