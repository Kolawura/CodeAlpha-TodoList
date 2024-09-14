const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require("os");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assets/resource',
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "static/js/bundle.js",
    path: path.resolve(__dirname, "public", "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'templates/bundle.html',
        inject: 'body', 
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.css', 
    }),
  ],
};
