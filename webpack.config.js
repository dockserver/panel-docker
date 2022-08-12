const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    context: __dirname,
    entry: './src/app/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'js'),
        publicPath: '/',
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
         inject: true,
         template: path.join(__dirname, './public/index.html'),
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
