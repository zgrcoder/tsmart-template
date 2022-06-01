module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // 启用默认核心规则
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  // add your custom rules here
  rules: {
    // 非开发模式禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 允许调用首字母大写的函数时没有 new 操作符
    'new-cap': 'off',
    // 在工具库中允许变量以下划线开头
    'no-underscore-dangle': 'off',
    // 在工具库中允许参数重新赋值
    'no-param-reassign': 'off',
    'number-leading-zero': 'off',
    // 在类属性和方法上关闭需要显式的可访问性修饰符
    '@typescript-eslint/explicit-member-accessibility': 'off',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/export': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-dynamic-require': 0,
    'import/no-relative-packages': 0,
    'object-shorthand': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'no-return-assign': 0,
    'func-names': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-undef': 0,
    'no-proto': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-cond-assign': 0,
    'no-template-curly-in-string': 0,
    'no-return-await': 0,
    'global-require': 0,
    camelcase: 0,
  },
  globals: {
    wx: true,
  },
};
