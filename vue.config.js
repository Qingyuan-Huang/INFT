const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'./', //解决打包之后打开 index.html为空白
  outputDir:'inft', // 消息通知
})
