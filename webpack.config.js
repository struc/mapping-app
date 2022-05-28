const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './src'),
  devtool: 'cheap-source-map',
  entry: './app.js',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(scss|sass)$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader', 'css-loader',
      ],
    }]
  },
  /*
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  */
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
    // ...
  ]

};
