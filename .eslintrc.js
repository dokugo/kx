module.exports = {
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/react",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "simple-import-sort",
    "better-styled-components",
  ],
  env: {
    "browser": true,
    "jasmine": true,
    "jest": true,
    "es6": true,
  },
  rules: {
    "prettier/prettier": [
      "error"
    ],
    "react/prop-types": 0,
    "better-styled-components/sort-declarations-alphabetically": 2,
    "simple-import-sort/sort": "error",
  },
  globals: {
    "process": true,
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect",
    }
  },
  parser: "@typescript-eslint/parser",
}