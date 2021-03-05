
module.exports = {
  extends: ['@paladin-frontface/eslint-config-paladin'],
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['off'],
    'one-var': ['error', 'consecutive'],
    indent: ['off'],
    complexity: ['error', 20]
  }
};
