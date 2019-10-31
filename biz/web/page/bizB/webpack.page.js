let webpack = require('webpack');
let path =require("path");
console.log("this is bizB page")
module.exports = {
    resolve: {
        alias: {
            '@web-bizB-components': `${path.resolve(__dirname, 'components')}`,
            '@web-bizB-mock': `${path.resolve(__dirname, 'mockData')}`,
            '@web-bizB-mobx': `${path.resolve(__dirname, 'mobx')}`,
            '@web-bizB-locales': `${path.resolve(__dirname, 'locales')}`
        }
    }
}