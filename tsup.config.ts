import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: options.watch ? ['src/**/*.ts'] : {
    server: 'src/main.ts',
  },
  clean: true,
  bundle: !options.watch,
  minify: !options.watch,
}));
