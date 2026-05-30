import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    // Tests and build config run in Node, not the browser.
    files: ['tests/**/*.ts', '**/*.config.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
)
