const path = require('path')
function resolve(dir) {
  //封装一个通用方法
  return path.resolve(__dirname, dir)
}
module.exports={
    chainWebpack: config => {
        config.resolve.alias
        .set('@static', resolve('public'))
        .set('@layout', resolve('src/layout'))
        .set('@style', resolve('src/style'))
        .set('@router',resolve('src/router'))
      },
}