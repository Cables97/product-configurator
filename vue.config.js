module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/personnel-page' : '/',
      css: {
        loaderOptions: {
          sass: {
            data: `@import "@/assets/styles/global.scss";`
          }
        }
      }
    };