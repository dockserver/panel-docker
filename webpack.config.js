const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/app/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public", "js"),
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            react: "preact/compat",
            "react-dom": "preact/compat",
        },
    },
    plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new HtmlWebpackPlugin({
         template: path.join(__dirname, "public", "index.html"),
         filename: "index.html",
         title: "--Docker Panel--",
    }),
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(?!scss)css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?!css)scss|sass$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
      runtimeChunk: 'single',
  },
 };
