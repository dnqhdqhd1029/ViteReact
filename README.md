```bash

# vite 설치
$ npm init vite
$ cd vite-project
$ yarn

# tslint 설정
$ yarn add tslint -D
$ touch tslint.json
```

```javascript
// tslint.json
{
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": [
      true,
      "always"
    ],
    "quotemark": [
      true,
      "single",
      "jsx-double"
    ],
    "indent": [
      true,
      "spaces",
      2
    ],
    "max-line-length": [
      true,
      200
    ],
    "no-console": false
  },
  "exclude": [
    "node_modules/**"
  ]
}
```

```bash
# prettier 설정
$ yarn add prettier -D
$ touch .prettierrc
```

```javascript
// .prettierrc
{
  "printWidth": 200,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

```bash
# eslint 설정
$ yarn add eslint -D
$ touch .eslintrc
```

```javascript
// .eslintrc
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

```bash
$ yarn add eslint-config-airbnb -D 
$ yarn add eslint-config-prettier -D 
$ yarn add eslint-plugin-import -D 
$ yarn add eslint-plugin-jsx-a11y -D 
$ yarn add eslint-plugin-prettier -D 
$ yarn add eslint-plugin-react -D 
$ yarn add eslint-plugin-react-hooks -D
$ yarn add @typescript-eslint/eslint-plugin -D
$ yarn add @typescript-eslint/parser -D

# sass 설정
$ yarn add sass -D

# 
$ yarn add axios
$ yarn add mobx mobx-react
$ yarn add react-router-dom
$ yarn add react-i18next i18next

# 데코레이터 설정
$ yarn add @babel/plugin-proposal-decorators -D

# build 후 서버 실행 설정
$ npm install -g serve

# vite plugin 설정
$ yarn add vite-plugin-eslint -D
$ yarn add vite-plugin-prettier -D
$ yarn add vite-tsconfig-paths -D
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tsconfigPaths()],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    minify: true,
  },
});
```
