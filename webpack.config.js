const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
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
        filename: 'bundle.html',
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
