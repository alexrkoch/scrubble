const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const PathType = Object.freeze({
  JS: "./src/ts/pages/{}.ts",
  SCSS: "./src/styles/pages/{}.scss",
  HTML: "./src/html/{}.html",
});

const getPagePath = function (pageName, pathType) {
  return pathType.replace("{}", pageName);
};

const pages = ["home", "game"];

const entries = pages.reduce(function (acc, val) {
  return {
    ...acc,
    [val]: [getPagePath(val, PathType.JS), getPagePath(val, PathType.SCSS)],
  };
}, {});

module.exports = {
  mode: "development",
  entry: entries,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    usedExports: true,
  },
  resolve: {
    mainFiles: ["index"],
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    ...pages.map(
      (pageName) =>
        new HtmlWebpackPlugin({
          template: PathType.HTML.replace("{}", pageName),
          inject: true,
          filename: `${pageName}.html`,
          chunks: [pageName],
        })
    ),
  ],
};
