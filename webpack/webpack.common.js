const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    alias: {
      hoc: path.resolve(__dirname, "../src/hoc"),
      components: path.resolve(__dirname, "../src/components"),
      assets: path.resolve(__dirname, "../src/assets"),
      api: path.resolve(__dirname, "../src/api"),
      enums: path.resolve(__dirname, "../src/enums"),
      store: path.resolve(__dirname, "../src/store"),
      context: path.resolve(__dirname, "../src/context"),
      hock: path.resolve(__dirname, "../src/hock"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
