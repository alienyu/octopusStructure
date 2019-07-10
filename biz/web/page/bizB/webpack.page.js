let webpack = require('webpack');
let path =require("path");
console.log("this is bizB page")
module.exports = {
    resolve: {
        alias: {
            'web-bizB-omponents': `${path.resolve(__dirname, 'components')}`,
            'web-bizB-headerCmp': `${path.resolve(__dirname, 'routes/layout/header.jsx')}`,
            'web-bizB-footerCmp': `${path.resolve(__dirname, 'routes/layout/footer.jsx')}`,
            'web-bizB-menuBarCmp': `${path.resolve(__dirname, 'routes/layout/menuBar.jsx')}`,
            'web-bizB-Constants': `${path.resolve(__dirname, 'static/Constants.js')}`,
            'web-bizB-ajax': `${path.resolve(__dirname, 'static/module/ajax.js')}`,
            'web-bizB-mock': `${path.resolve(__dirname, 'mockData')}`,
            'web-bizB-mobx': `${path.resolve(__dirname, 'mobx')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            webBizBAjax: 'web-bizB-ajax'
        })
    ]
}