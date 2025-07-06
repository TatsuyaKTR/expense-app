const { defineConfig } = require('@vue/cli-service')
const mockerApi = require('mocker-api');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    setupMiddlewares(middlewares, devServer) {
      mockerApi(devServer.app, require('./mock/index.js'), {
        log: true
    });
      return middlewares;
    },
  },
});
