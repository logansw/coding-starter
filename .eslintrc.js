module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
  ],
  globals: {
    JSX: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "jsx-a11y/alt-text": "off",

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],

    camelcase: "off",
    "func-names": "off",
    "import/extensions": "off",
    "import/order": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",

    "prettier/prettier": "error",

    "react/destructuring-assignment": "off",
    "react/button-has-type": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
  },
};
