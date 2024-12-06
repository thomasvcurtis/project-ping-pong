import globals from 'globals'
import pluginJs from '@eslint/js'
import react from 'eslint-plugin-react'

export default [
  pluginJs.configs.recommended,
  {
    files: ['./src/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
    plugins: {
      react
    },
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-duplicate-head': 'off'
    }
  },
  {
    ignores: ['.storybook/**/*', 'jest.config.js', 'next-env.d.ts', 'next.config.js', 'auth-service-worker.js']
  }
]