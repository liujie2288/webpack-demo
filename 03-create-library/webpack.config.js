var path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./index.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  }
};
