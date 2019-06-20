const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'SOURCES_URL_PREFIX': JSON.stringify('http://localhost:8201')
    })
  ],
  output: {
    jsonpFunction: 'jsonpFunction' + Math.random().toString(36).slice(2)
  }
};
