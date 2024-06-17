import externals from 'rollup-plugin-node-externals';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  json(),
  externals({ deps: true }),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
];

const output = {
  dir: 'dist',
  format: 'es',
  sourcemap: true,
};

export default [
  {
    input: 'src/index.ts',
    output,
    plugins,
  },
];
