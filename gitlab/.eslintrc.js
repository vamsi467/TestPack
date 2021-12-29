module.exports = {
  plugins: ['prettier', 'vue'],
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
