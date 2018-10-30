let webpack = require('webpack');
let path =require("path");
console.log("this is page")
module.exports = {
    resolve: {
        alias: {
            "web-admin-ajax": `${path.resolve(__dirname, 'static/module/ajax.js')}`,
            "web-admin-routeEnter": `${path.resolve(__dirname, 'routes/routeEnter.js')}`,
            "web-admin-mock": `${path.resolve(__dirname, 'mockData')}`,
            "web-admin-loadingMaskStore": `${path.resolve(__dirname, 'mobx/loadingMask.js')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'webAdminAjax': 'web-admin-ajax',
            'webAdminRouteEnter': 'web-admin-routeEnter'
        })
    ]
}