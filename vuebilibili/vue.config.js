module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  lintOnSave:false,
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/assets/scss/main.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<https://jsonplaceholder.typicode.com/users>',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
        //代理服務器說謊domain
      },
      '/demo': {
        target: '<https://jsonplaceholder.typicode.com/users>',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
        //代理服務器說謊domain
      },
    }
  }
  
}