const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/Limitless-Consultant/' : '/',
  devServer: {
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
    watchOptions: {
      poll: true, // Enable polling for file changes
      ignored: /node_modules/, // Ignore changes in node_modules
    },
  },
})
