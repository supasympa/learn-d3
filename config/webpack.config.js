const webpack = require('webpack');
const path = require('path');

const DIST_PATH = path.resolve(process.cwd(), 'dist');
const CONFIG_PATH = path.resolve(process.cwd(), 'config');

// console.log(DIST_PATH);

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendor: [
      'd3',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
  },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
  /*  externals: {
      // Use external version of React
      react: 'React',
      'react-dom': 'ReactDOM',
    },*/
};
