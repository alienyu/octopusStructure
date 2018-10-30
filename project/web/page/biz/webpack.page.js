let webpack = require('webpack');
let path =require("path");
console.log("this is biz page")
module.exports = {
    resolve: {
        alias: {
            "web-biz-ajax": `${path.resolve(__dirname, 'static/module/ajax.js')}`,
            "web-biz-mask": `${path.resolve(__dirname, 'static/module/mask/mask.js')}`,
            "web-biz-routeEnter": `${path.resolve(__dirname, 'routes/routeEnter.js')}`,
            "web-biz-mock": `${path.resolve(__dirname, 'mockData')}`,
            "web-biz-userStore": `${path.resolve(__dirname, 'mobx/userInfo.js')}`,
            "web-biz-menuStore": `${path.resolve(__dirname, 'mobx/menu.js')}`,
            "web-biz-imgs": `${path.resolve(__dirname, 'static/imgs')}`,
            "web-biz-common": `${path.resolve(__dirname, 'static/module/common.js')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'webBizAjax': 'web-biz-ajax',
            'webBizRouteEnter': 'web-biz-routeEnter',
            'webBizMask': 'web-biz-mask',
            'webBizCommon': 'web-biz-common'
        })
    ]
}