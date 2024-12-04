import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import mochaPlugin from 'eslint-plugin-mocha';
import * as wdio from 'eslint-plugin-wdio';
import typescriptParser from '@typescript-eslint/parser';

export default [
  pluginJs.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  wdio.configs['flat/recommended'],
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    braceStyle: '1tbs',
    commaDangle: 'never'
  }),
  {
    plugins: {
      '@stylistic': stylistic
    },
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser
    },
    rules: {
      'no-unused-vars': ['warn']
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
