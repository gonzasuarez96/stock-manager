/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["react", "react-hooks", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: [
          "arrow-function",
          "function-declaration",
          "function-expression",
        ],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-void": "off",
  },
};

module.exports = config;
