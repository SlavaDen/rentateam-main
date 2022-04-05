const webpack = require("webpack");
const config = require("../prod.config.json");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(config),
    }),
  ],
};
