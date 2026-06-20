import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default withNuxt(
  {
    name: 'nuxt-task/ignores',
    ignores: [
      '.nuxt/**',
      '.output/**',
      'coverage/**',
      'dist/**',
      'node_modules/**'
    ]
  },
  eslintConfigPrettier
)
