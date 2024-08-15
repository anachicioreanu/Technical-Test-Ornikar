import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // General configuration for JS, MJS, CJS, and TS files
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser, // Browser globals for frontend files
      sourceType: "module", // Default to ES module
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
  // Specific configuration for Node.js/CommonJS files
  {
    files: [
      "**/nightwatch.conf.js",
      "**/*.cjs",
      "**/nightwatch/**/*.js", // This pattern targets your Nightwatch-related files
    ],
    languageOptions: {
      globals: {
        ...globals.node, // Include Node.js globals like `module`, `exports`, `require`
        ...globals.browser, // If browser globals are also needed
      },
      sourceType: "commonjs", // Treat these files as CommonJS
    },
  },
  eslintConfigPrettier,
  { ignores: ["**/distrib/", "**/nightwatch/types/*.d.ts"] },
];
