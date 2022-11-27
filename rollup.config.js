import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';

const entry = './index.ts';

const es_config = {
  input: entry,
  output: {
    file: 'dist/index.es.js',
    format: 'es',
  },
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts'],
    }),
  ],
};

const dts_config = {
  input: entry,
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [dts()],
};

export default [es_config, dts_config];
