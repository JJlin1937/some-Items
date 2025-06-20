const  path = require('path') 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/base.css'),
        path.resolve(__dirname, './src/assets/styles/variables.less'),
        path.resolve(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  // 跨域请求
  devServer: {
    proxy: {
      '/api': {
        target: 'http://you.163.com',//网易新闻接口
        ws:true,
        changeOrigin: true,
        pathRewrite: {//重新路径
          '^/api': ''
        }
      },
      '/foo': {
        target: 'http://localhost:7788',//本地接口
        ws:true,
        changeOrigin: true,
        pathRewrite: {//重新路径
          '^/foo': ''
        }
      }
    }
  }
})
