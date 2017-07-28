const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    hot: true,
    inline: true,
    port: 4000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};
