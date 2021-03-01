const HtmlWebpackPlugin = require("html-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
//
//const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/, //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          //важно!!!
          // fallback to style-loader in development
          //process.env.NODE_ENV !== "production"
          //  ? "style-loader"
          //  :
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      //как я понял - либо style css либо miniextractplugin
      //
      // works
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     { loader: "css-loader", options: { importLoaders: 1 } },
      //     "postcss-loader",
      //   ],
      // },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      //filename: devMode ? "[name].css" : "[name].[hash].css",
      //chunkFilename: '[id].css',
      //ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
