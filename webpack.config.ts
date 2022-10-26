const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 2000000,
    maxEntrypointSize: 2000000
  },
  devServer: {
    static: {
      directory: __dirname + '/public',
  },
    hot: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', {'runtime': 'automatic'}]]
        }
      }
    ],
  },
};