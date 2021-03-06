// webpack 4+
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  console.log("***", argv.mode, "***");

  const isProd = argv.mode === "production";

  return {
    entry: { main: "./src/index.js" },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[chunkhash].js"
    },
    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, ""),
      open: true
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: false }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            ...(isProd ? [MiniCssExtractPlugin.loader] : []), // write to disc
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin("dist", {}),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: "./src/index.html",
        filename: "index.html"
      }),
      new WebpackMd5Hash()
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        root: path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components")
      }
    }
  };
};
