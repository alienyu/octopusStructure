let webpack = require('webpack');
let path =require("path");
module.exports = {
    resolve: {
        alias: {
            '@webWholeCaseMobx': `${path.resolve(__dirname, 'mobx')}`,
            '@webWholeCaseLocales': `${path.resolve(__dirname, 'locales')}`,
            '@webWholeCaseHoc': `${path.resolve(__dirname, 'hoc')}`,
            'webWholeCaseGlobalConf': `${path.resolve(__dirname, 'static/global/index.ts')}`,
            'webWholeCaseRenderRoutes': `${path.resolve(__dirname, 'routes')}`,
            'webWholeCaseAjax': `${path.resolve(__dirname, 'static/module/ajax.ts')}`,
            'webWholeCaseConstants': `${path.resolve(__dirname, 'static/Constants.ts')}`,
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Constants: ['webWholeCaseConstants', 'default'],
            ajax: ['webWholeCaseAjax', 'default']
        })
    ]
}