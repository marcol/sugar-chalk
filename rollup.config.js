import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  external: ['chalk', 'readline'],
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es'
    }
  ],
  plugins: [resolve]
}
