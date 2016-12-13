module.exports = {
  root: true,
  extends: 'airbnb-base',
  plugins: [
    'html',
    'react',
  ],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Turned off as webpack warns on compile (BUG attempted to resolve Vue files)
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'semi': [1, 'never'],

    // Allow functions to be hoisted
    'no-use-before-define': [2, { functions: false, classes: true }],

    // Allow no parathesis on arrow functions
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],

    // Reassign props is valid
    'no-param-reassign': [2, { props: false }],

    // Support Vue and JSX render function with h argument
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', argsIgnorePattern: '^h$' }],

    // Always use object shorthand
    'object-shorthand': [2, 'always'],

    // Disabling some rules just for now:
    'vue/jsx-uses-vars': 0,
    'object-curly-spacing': 0,
    'prefer-const': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'import/first': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'quotes': 0,
    'array-callback-return': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'spaced-comment': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'object-shorthand': 0,
    'no-shadow': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'no-trailing-spaces': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
    'no-useless-concat': 0,
    'no-param-reassign': 0,
    'padded-blocks': 0,
    'no-plusplus': 0,
    ///////////////////////////////////

    // JSDOC support
    'require-jsdoc': [1, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'valid-jsdoc': [2, {
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        return: 'returns',
        virtual: 'abstract',
      },
      requireParamDescription: false,
      requireReturn: true,
      requireReturnType: true,
      requireReturnDescription: true,
      matchDescription: '^[A-Z]+.+',
    }],
  },
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2017,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};
