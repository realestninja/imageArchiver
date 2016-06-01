module.exports = {
  entry: './src/imageArchiver.js',
  output: {
    path: __dirname,
    filename: 'main.js'
  }, 
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude : /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016']
        }
      }
    ]
  }
};