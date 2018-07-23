const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const jsEntryPath = path.resolve(__dirname, "./js");

const jsEntris = fs.readdirSync(jsEntryPath).reduce(function(o, filename) {
  const name = path.basename(filename, ".js");
  o[name] = "./js/" + name;
  return o;
}, {});

function deleteall(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteall(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

deleteall(path.resolve(__dirname, "./dist"));

module.exports = {
  mode: "production", // 生产环境，压缩js
  // mode: "development",
  entry: {
    ...jsEntris,
    base: "./css/base.css",
    reset: "./css/reset.css",
    styles: "./css/styles.css"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].min.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
                minimize: false,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // limit: 8192,
              mimetype: "image/png",
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].css",
      disable: false,
      allChunks: true
    }),

    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: false }
    }) // 开启 css 压缩
  ],
  optimization: {
    // minimize: true
    // runtimeChunk: {
    //   name: "manifest"
    // },
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendor",
    //       chunks: "all"
    //     }
    //   }
    // }
  },
  externals: {
    echarts: "window.echarts",
    Swiper: "window.Swiper"
  },
  devServer: {}
};
