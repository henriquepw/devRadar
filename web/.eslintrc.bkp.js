module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'jsx-a11y',
    'import',
  ],
  settings: {
    'import/resolver': {
      alias: [['~', './src']],
    },
  },
};
