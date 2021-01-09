module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  exclude: ["dist/"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "react/prop-types": 0 },
};
