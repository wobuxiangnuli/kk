const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    // proxy: 'api',
    // before: require('./mock/mock-server.js')
  }
})
