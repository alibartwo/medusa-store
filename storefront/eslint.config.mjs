// @ts-check
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";

export default [
  {
    files: ["*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
    },
    rules: {
      // HTML attribute line breaks
      "vue/first-attribute-linebreak": [
        "error",
        {
          singleline: "below", // önemli!
          multiline: "below",
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
  },
  prettier, // Prettier ile çakışan kuralların override edilmesi
];
