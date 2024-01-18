const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  rules: [
    {
     test: /\.svg$/,
     loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
    },
  ],
});
