import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: {
        // dir: 'build',
        file: "build/script.js",
        format: "cjs",
    },
    plugins: [typescript()],
};
