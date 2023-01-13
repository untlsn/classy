import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/main.ts'],
  clean: true,
  bundle: true,
  minify: true,
  format: ['cjs'],
  shims: true,
});
