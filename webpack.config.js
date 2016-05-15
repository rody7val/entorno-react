var path = require('path');
var webpack  = require('webpack');

const IS_DEV = (process.env.NODE_ENV === 'development');
console.log('Webpack config. Environment: ', (IS_DEV ? 'development' : 'production'));

const devConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/development'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  }
}

const prodConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/production'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        //REMOVE react-hot for production build
        loaders: ['babel']
      }
    ]
  }
}

module.exports = IS_DEV ? devConfig : prodConfig;
