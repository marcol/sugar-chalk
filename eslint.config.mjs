import markdown from 'eslint-plugin-markdown'
import jsonFormat from 'eslint-plugin-json-format'
import filenames from 'eslint-plugin-filenames'
import vitest from 'eslint-plugin-vitest'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: ['**/package-lock.json', '**/node_modules/', '**/dist/']
  },
  ...compat.extends('standard'),
  {
    plugins: {
      markdown,
      'json-format': jsonFormat,
      filenames,
      vitest
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
      // globals: {
      //     ...globals.browser,
      //     ...globals.node,
      //     Atomics: "readonly",
      //     SharedArrayBuffer: "readonly",
      // },

      // ecmaVersion: 2018,
      // sourceType: "module",
    },

    settings: {
      'html/indent': '+2',
      'html/report-bad-indent': 'warn'
    },

    rules: {
      indent: ['warn', 2],
      complexity: ['error', 12],
      'max-depth': ['error', 3],
      'max-lines': ['error', 120],
      'max-nested-callbacks': ['error', 3],
      'max-params': ['error', 3],
      'max-statements': ['error', 10],
      'max-statements-per-line': ['error', {
        max: 1
      }]
    }
  }
]
