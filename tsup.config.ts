import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs'],
  minify: true,
  sourcemap: false,
  clean: true,
  target: 'es2019',
  external: ['react', 'react-native'],
  dts: true, // Generar archivos .d.ts
  tsconfig: './tsconfig.json' // Usar el tsconfig existente
});
