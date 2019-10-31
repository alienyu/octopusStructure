let webpack = require('webpack');
let path =require("path");
console.log("this is bizA page")
module.exports = {
    resolve: {
        alias: {
            '@webBizALocales': `${path.resolve(__dirname, 'locales')}`,
            '@webBizARoutes': `${path.resolve(__dirname, 'routes')}`,
            '@webBizAHoc': `${path.resolve(__dirname, 'hoc')}`,
            'webBizARenderRoutes': `${path.resolve(__dirname, 'routes.tsx')}`
        }
    }
}