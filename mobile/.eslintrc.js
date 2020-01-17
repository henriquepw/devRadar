module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'import-helpers',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^(react|styled-components)/',
          'module',
          '/^~/atoms/',
          '/^~/molecules/',
          '/^~/organismis/',
          '/^~/templates/',
          '/^~/context/',
          ['parent', 'sibling', 'index'],
          '/^~/(assets|res)/',
          '/^(~/|./)styles/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/extensions': ['js', 'jsx', '.ts', '.tsx'],
    'import/resolver': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
      },
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
