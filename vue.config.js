const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        // host: '0.0.0.0',
        port: 9220, // 固定端口号
        open: true
        // https: true
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                // 修改它的选项...
                //处理embed标签的src资源
                options.transformAssetUrls = {
                    embed: 'src',
                    '*': ['src'],
                }
                return options
            })
    }
})
