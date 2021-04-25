const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    libraryTarget:'umd'
  },
  mode: "none",
  devServer: {
    open: true,
  },
  externals: {
    jquery: {
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "jquery",
      root: "jQuery",
    },
    // isFunction: ["jQuery", "isFunction"],
    // add: "commonjs ./math",
    // lodash: {
    //   commonjs: "lodash",
    //   commonjs2: "lodash",
    //   amd: "lodash",
    //   root: "_", // 指向全局变量
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
