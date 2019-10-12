let webpack = require('webpack');
let path =require("path");
console.log("this is bizA page")
module.exports = {
    resolve: {
        alias: {
            'web-bizA-components': `${path.resolve(__dirname, 'components')}`,
            'web-bizA-mock': `${path.resolve(__dirname, 'mockData')}`,
            'web-bizA-mobx': `${path.resolve(__dirname, 'mobx')}`,
            'web-bizA-locales': `${path.resolve(__dirname, 'locales')}`,
            'web-bizA-renderRoutes': `${path.resolve(__dirname, 'routes.js')}`,
            'web-bizA-routes': `${path.resolve(__dirname, 'routes')}`
        }
    }
}