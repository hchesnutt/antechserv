const path = require('path');

module.exports = {
  entry: "./frontend/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"],
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
