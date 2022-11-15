export default {
  input: 'src/index.js',
  external: ['chalk', 'readline'],
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      file: 'dist/index.mjs',
      format: 'es'
    }
  ]
}
