function loadPlatformConf(envConf) {
    let webpack = require('webpack');
    let merge = require("webpack-merge");
    let path =require("path");
    let platformConf = {};
    //获取待编译的页面列表
    let pageList = envConf['deployContent']['mobile'].length > 0 ? envConf['deployContent']['mobile'] : require(`./platformConf.json`)["pageList"];
    let pageConf = {};
    pageList.map(pageName => {
        pageConf = merge(pageConf, require(`./page/${pageName}/webpack.page.js`));
    })
    platformConf = merge({
        resolve: {
            alias: {
                "mobile-base64ToBuffer": `${path.resolve(__dirname, "common/static/module/base64ToBuffer.js")}`,
                'vue': 'vue/dist/vue.js',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                'base64ToBuffer': 'mobile-base64ToBuffer',
                'Vue': 'vue',
                'VueRouter': 'vue-router',
                'VueResource': 'vue-resource',
                'Vuex': 'vuex'
            })
        ]
    }, pageConf);
    console.log("this is mobile platform")
    return platformConf;
}

module.exports = loadPlatformConf;