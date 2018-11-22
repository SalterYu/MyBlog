const path = require('path')
const VueLoaderPlugin = require('../vue-complier/vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HelloWorldPlugin = require('./plugins/hello-world-plugin')
const FileListPlugin = require('./plugins/file-list-plugin')
const CheckCompilerHooksPlugin = require('./plugins/check-compiler-hooks-plugin')
const CheckCompilationHooksPlugin = require('./plugins/check-compilation-hooks-plugin')
const WebpackDispatchChunkPlugin = require('./plugins/webpack-dispatch-chunk-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  devtool: "eval-source-map", //
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: 'bundle-[hash].js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: path.resolve('./loaders/jsx-loader.js'),
          options: {test: true}
        }
      },
      {
        test: /\.mp/,
        use: {
          loader: path.resolve('./loaders/mp-loader.js'),
        }
      },
      {
        test: /\.vue$/,
        use: [path.resolve('../vue-complier/vue-loader/lib/index.js')]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [/node_modules/, /loaders/],
        include: [resolve('app'), resolve('test')],
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './'
          }
        }, {
          loader: 'css-loader',
          options: {
            modules: false
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack-sample-project",
      template: resolve("app/index.html"),
    }),
    new CleanWebpackPlugin(['build/*.*'], {
      root: __dirname,
      dry: false,
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    }),
    // new WebpackDispatchChunkPlugin({
    //   bundle: 'vendors'
    // })
    // new CheckCompilerHooksPlugin(),
    // new FileListPlugin(),
    // new CheckCompilationHooksPlugin()
    // new HelloWorldPlugin()
  ]
}