module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty-pattern': 'off',
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'unused-imports/no-unused-imports': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
  globals: {
    $nuxt: true,
  },
  ignorePatterns: ['static/*', 'test/*'],
}
