import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

const libraryPackage = require('./package.json');
const libraryName = libraryPackage.name;

export default {
    input: `src/${libraryName}.ts`,
    output: [
	{ file: `dist/${libraryName}.cjs.js`, format: "cjs" },
	{ file: `dist/${libraryName}.esm.js`, format: "esm" }
    ],
    plugins: [
        json(),
        typescript(),
        commonjs(),
        resolve()
    ]
};
