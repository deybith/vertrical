module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
      '@typescript-eslint',
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "no-prototype-builtins": "off",
    "@next/next/no-img-element": "off",  // disabled for dynamic external images
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals'
  ],
};