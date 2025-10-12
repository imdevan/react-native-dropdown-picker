import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintComments from 'eslint-plugin-eslint-comments';
import imprt from 'eslint-plugin-import';
import json from 'eslint-plugin-json';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import simpleImportSort from 'eslint-plugin-simple-import-sort'
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'package-lock.json',
      'build',
      'dist',
      '*.expo',
      'coverage',
      '.github',
      '.idea',
      '.vscode',
      '*.yaml',
      '*.yml',
      '*.md',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tseslint.plugin,
      'eslint-comments': eslintComments,
      json,
      import: imprt,
      simpleImportSort
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        JSX: true,
        require: true,
        module: true,
        __dirname: true,
        setTimeout: true
      },
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
          readonly: 'generic',
        },
      ],
      // '@typescript-eslint/explicit-function-return-type': 'error',
      // '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          fixToUnknown: false,
          ignoreRestArgs: false,
        },
      ],
      '@typescript-eslint/no-require-imports': 'off', // diabling until typescript rewrite
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-empty-function': 'off', // disabling due to lots of functions defaulting to empt@typescript-eslint/no-empty-functiony
      '@typescript-eslint/no-unused-vars': [
          "error",
          {
              caughtErrors: "none"
          }
      ],
      'no-underscore-dangle': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-style': ['error', 'last'],
      'import/extensions': ['error', 'never'],
      'import/no-unresolved': 'error',
      'jsx-quotes': ['error', 'prefer-single'],
      'linebreak-style': ['error', 'unix'],
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-multi-spaces': 'error',
      'no-shadow': 'error',
      'no-template-curly-in-string': 'error',
      'no-trailing-spaces': 'error',
      'no-undef': 'error',
      'react-native/no-inline-styles': 'warn',
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      ],
      "simpleImportSort/imports":  ["error"],
      'react/prop-types': 'off', // Disabling until typescript rewrite
    },
  },
  prettier,
);