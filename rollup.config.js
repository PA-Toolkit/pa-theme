import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: {
    name: "PATheme",
    dir: "build",
    format: "umd",
  },
  plugins: [
    typescript(),
    del({
      targets: ["build"],
    }),
  ],
};
