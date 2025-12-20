import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      // Airbnb-style rules

      'func-style': ['error', 'expression'],

      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'comma-dangle': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'eqeqeq': ['error', 'always'],
      'no-multi-spaces': 'error',
      'no-param-reassign': ['error', { 'props': false }],
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'no-useless-concat': 'error',

      // Import rules (Airbnb-style)
      'import/no-unresolved': 'off',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-duplicates': 'error',
      'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }]
    }
  }
];
