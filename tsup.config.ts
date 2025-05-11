import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  external: ['react', 'react-native'],
});
