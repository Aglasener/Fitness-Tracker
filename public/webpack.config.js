const path = require("path");

const config = {
  entry: {
    app: "./assets/js/app.js",
    chart: "./assets/js/exerciseChart.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  target: "node"
};
module.exports = config;
