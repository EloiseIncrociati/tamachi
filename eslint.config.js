// https://docs.expo.dev/guides/using-eslint/
const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier/flat');

module.exports = defineConfig([
  globalIgnores(['dist/*', '.expo/*', 'expo-env.d.ts']),
  // TypeScript, React, React Hooks and import rules.
  expoConfig,
  // Must stay last: turns off every ESLint rule that conflicts with Prettier.
  prettierConfig,
]);
