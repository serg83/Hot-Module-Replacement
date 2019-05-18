const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); deprectaed !!!!
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
  module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'app.bundle.js'
  },
  module: {
      rules: [
          {
             test: /\.(scss|sass|css)$/,
             use: [
              'css-hot-loader'
              MiniCssExtractPlugin.loader,
              // 'style-loader',
                'css-loader',
                'sass-loader']},
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader',
              include: /src/      //****
            },
            {
            test: /\.(js|jsx)$/,      //
            use: 'react-hot-loader/webpack',//
            include: /node_modules/ ,

          }
      ]

  },
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
    //  port: 9000,
      stats: 'errors-only',
    //  open: true
  },
plugins: [
  //new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin,
  //  new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    }),
   new MiniCssExtractPlugin({filename: '[name].[contentHash].css',
   chunkFilename: '[id].css' }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
