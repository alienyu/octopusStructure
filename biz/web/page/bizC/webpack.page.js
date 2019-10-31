let webpack = require('webpack');
let path =require("path");
console.log("this is bizC page")
module.exports = {
    resolve: {
        alias: {
            '@web-bizC-components': `${path.resolve(__dirname, 'components')}`,
            '@web-bizC-mock': `${path.resolve(__dirname, 'mockData')}`,
            '@web-bizC-mobx': `${path.resolve(__dirname, 'mobx')}`,
            '@web-bizC-locales': `${path.resolve(__dirname, 'locales')}`,
            '@web-bizC-routes': `${path.resolve(__dirname, 'routes')}`,
            '@web-bizC-hoc': `${path.resolve(__dirname, 'hoc')}`,
            'web-bizC-renderRoutes': `${path.resolve(__dirname, 'routes.js')}`,
        }
    }
}