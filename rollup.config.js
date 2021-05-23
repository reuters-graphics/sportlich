import externals from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

const plugins = [
  resolve({ preferBuiltins: true, modulesOnly: true }),
  json(),
  externals({ deps: true }),
  sizeSnapshot(),
];

const getOutput = (path) => ({
  dir: "dist",
  format: "cjs",
  paths: { "@reuters-graphics/sportlich": path },
});

export default [
  {
    input: "src/apis/soccer.js",
    output: getOutput("./soccer.js"),
    plugins,
  },
  {
    input: "src/apis/baseball.js",
    output: getOutput("./baseball.js"),
    plugins,
  },
  {
    input: "src/cli.js",
    output: {
      ...getOutput("./index.js"),
      ...{ banner: "#!/usr/bin/env node" },
    },
    plugins,
    external: ["@reuters-graphics/sportlich"],
  },
];
