module.exports = {
  plugins: ['prettier', 'jest'],
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
};
