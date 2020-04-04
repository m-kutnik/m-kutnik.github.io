module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@m-kutnik/eslint-config',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
}
