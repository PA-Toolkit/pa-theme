import ts from "rollup-plugin-ts";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";

const production = process.env.NODE_ENV === "production";

export default {
  input: "src/index.ts",
  output: {
    name: "PATheme",
    dir: "build",
    format: "umd",
  },
  plugins: [
    ts(),
    del({
      targets: ["build"],
    }),
    production && terser(),
  ],
};
