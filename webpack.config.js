var path = require('path');
var webpack  = require('webpack');

const outPath = path.join(__dirname, 'dist');
const IS_DEV = (process.env.NODE_ENV === 'development');
console.log('Webpack config. Environment: ', (IS_DEV ? 'development' : 'production'));

const devConfig = {}

const prodConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      }
    ]
  }
}

module.exports = IS_DEV ? devConfig : prodConfig;
