const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const JAVASCRIPT_RULES = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};

const SASS_RULES = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const ALIAS_PATHS = {
  api: path.resolve(__dirname, "./src/api/"),
  assets: path.resolve(__dirname, "./src/assets/"),
  components: path.resolve(__dirname, "./src/components/"),
  shared: path.resolve(__dirname, "./src/components/shared/"),
  containers: path.resolve(__dirname, "./src/components/containers/"),
  views: path.resolve(__dirname, "./src/components/views/"),
  helpers: path.resolve(__dirname, "./src/helpers/"),
  hooks: path.resolve(__dirname, "./src/hooks/"),
  styles: path.resolve(__dirname, "./src/styles/"),
};

const HTML_PLUGIN_SETTINGS = {
  template: "src/index.html",
  favicon: "./src/assets/images/favicon.ico",
};

const FILES_RULES = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    outputPath: "images",
  },
};

module.exports = {
  module: {
    rules: [JAVASCRIPT_RULES, SASS_RULES, FILES_RULES],
  },
  resolve: {
    alias: ALIAS_PATHS,
  },
  plugins: [new HTMLWebpackPlugin(HTML_PLUGIN_SETTINGS)],
};
