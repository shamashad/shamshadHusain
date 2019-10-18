const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build')},
    module:{
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
            },
            enforce: "post"
        },
        {
          test: /\.(?:le|c)ss$/,
          use: [
            require.resolve("style-loader"),
            { 
              loader: require.resolve("css-loader"),
              options: {
                importLoaders: 1,
              } 
            },
            { 
              loader: require.resolve("less-loader"),
              options: {
                importLoaders: 1,
              } 
            }
          ]
        },
        { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins:[htmlWebpackPlugin]
  }

