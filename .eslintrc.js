module.exports = {
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    // 0 false, 1 warn, 2 error
    camelcase: [
      'error',
      {
        allow: [
          'drop_console',
          'aut_time',
          'c_hash',
          'nonce_supported',
          'withdrawal_datetime',
          'grant_type',
          'client_id',
          'redirect_uri',
          'property_keys'
        ]
      }
    ],
    indent: [
      'warn',
      2,
      {
        ArrayExpression: 'first',
        CallExpression: { arguments: 'first' },
        flatTernaryExpressions: true,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        ignoreComments: true,
        ignoredNodes: [
          'ConditionalExpression',
          'JSXAttribute',
          'JSXClosingElement',
          'JSXElement',
          'JSXElement > *',
          'JSXEmptyExpression',
          'JSXExpressionContainer',
          'JSXIdentifier',
          'JSXMemberExpression',
          'JSXNamespacedName',
          'JSXOpeningElement',
          'JSXSpreadAttribute',
          'JSXSpreadChild',
          'JSXText',
          'TemplateLiteral',
          'TemplateLiteral > *'
        ],
        ImportDeclaration: 'first',
        MemberExpression: 1,
        ObjectExpression: 'first',
        SwitchCase: 1,
        VariableDeclarator: 'first'
      }
    ],
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/no-danger': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    'react/display-name': 'off',
    'prettier/prettier': 'off',
    'vars-on-top': 'off',
    'no-alert': 'off',
    'no-shadow': 'off',
    'no-script-url': 'off',
    'no-lonely-if': 'off',
    'no-nested-ternary': 'off',
    // toolkit 에서는 param 에 대입하는 방식으로 되어있어 disable 처리
    'no-param-reassign': 'off',
    'no-extra-boolean-cast': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-restricted-properties': ['off'],
    'no-bitwise': ['off'],
    'default-case': 'off',
    'no-use-before-define': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-unused-expressions': 'off',
    'one-var': 'off',
    //'template-curly-spacing': 'off',
    'prefer-const': 'off',
    'spaced-comment': 'off',
    'operator-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'error',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
    'no-else-return': 'off',
    'global-require': 'off',
    semi: [1, 'always'],
    'space-unary-ops': 2,
    'comma-dangle': ['error', 'never'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/env.*.js', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'] }],
    // function, object를 types로 명시하는 것을 방지
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-shadow': 'off',
    // 혹시모를 any타입의 사용을 위해 아에 불가하게는 하지 않습니다.
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
}
