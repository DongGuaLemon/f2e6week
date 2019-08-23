module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "/f2e6week" : "/",
    configureWebpack: {
        externals: {
          'element-ui': 'ELEMENT'
        }
      },
}