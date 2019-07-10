let webpack = require('webpack');
let path =require("path");
console.log("this is bizA page")
module.exports = {
    resolve: {
        alias: {
            'web-bizA-components': `${path.resolve(__dirname, 'components')}`,
            'web-bizA-headerCmp': `${path.resolve(__dirname, 'routes/layout/header.jsx')}`,
            'web-bizA-footerCmp': `${path.resolve(__dirname, 'routes/layout/footer.jsx')}`,
            'web-bizA-menuBarCmp': `${path.resolve(__dirname, 'routes/layout/menuBar.jsx')}`,
            'web-bizA-Constants': `${path.resolve(__dirname, 'static/Constants.js')}`,
            'web-bizA-ajax': `${path.resolve(__dirname, 'static/module/ajax.js')}`,
            'web-bizA-mock': `${path.resolve(__dirname, 'mockData')}`,
            'web-bizA-mobx': `${path.resolve(__dirname, 'mobx')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            webBizAAjax: 'web-bizA-ajax'
        })
    ]
}