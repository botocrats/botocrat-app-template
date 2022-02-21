// ESLint does not support ESM configuration at this time.
// https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-files

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  },
  root: true
}
