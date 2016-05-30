const webpack = require('webpack');
const path = require('path');
//const buildPath =  path.join(__dirname,'../','build/gm-inventory-search');
const nodeModulesPath =  path.join(__dirname,'../','node_modules');

const config = {

  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: 'source-map',
  plugins: [
    //Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false,
      },
    }),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin()
    ,new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
    ],
  },
  //Eslint config
  eslint: {
    configFile: '.eslintrc', //Rules for eslint
  },
};

module.exports = config;
