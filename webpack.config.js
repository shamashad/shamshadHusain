const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
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
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ]
  }

