const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/src/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
    mode: process.env.NODE_ENV,
    context: __dirname,
    entry: './src/app/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
        chunkFilename: '[id].[chunkhash].js'
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
