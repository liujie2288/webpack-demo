const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(require.resolve("jquery"))
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "none",
  devServer: {
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery", // 当代码中使用`$`标识符，并且没有定义`$`,会自动导入jquery包，不用手动引入(import $ from jquery)
      _map: ["lodash", "map"], // 当代码中使用了'_map',并且没有定义`_map`，则会自动导入lodash的map函数
      Vue: ["vue/dist/vue.esm.js", "default"], // ES Module默认导出，需要指定`default`属性
    }),
  ],
};
