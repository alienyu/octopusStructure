let path = require("path");

function loadPlatformConf(envConf) {
    let webpack = require('webpack');
    let merge = require("webpack-merge");
    let platformConf = {};
    //获取待编译的页面列表
    let pageList = envConf['deployContent']['web'].length > 0 ? envConf['deployContent']['web'] : require(`./platformConf.json`)["pageList"];
    let pageConf = {};
    pageList.map(pageName => {
        pageConf = merge(pageConf, require(`./page/${pageName}/webpack.page.js`));
    })
    platformConf = merge({
        resolve: {
            alias: {
                'web-components': `${path.resolve(__dirname, 'page/common/components')}`,
                'web-headerCmp': `${path.resolve(__dirname, 'page/common/components/layout/header.jsx')}`,
                'web-footerCmp': `${path.resolve(__dirname, 'page/common/components/layout/footer.jsx')}`,
                'web-menuBarCmp': `${path.resolve(__dirname, 'page/common/components/layout/menuBar.jsx')}`,
                'web-Constants': `${path.resolve(__dirname, 'page/common/static/Constants.js')}`,
                'web-ajax': `${path.resolve(__dirname, 'page/common/static/module/ajax.js')}`,
                'web-mock': `${path.resolve(__dirname, 'page/common/mockData')}`,
                'web-mobx': `${path.resolve(__dirname, 'page/common/mobx')}`,
                'web-locales': `${path.resolve(__dirname, 'page/common/static/locales')}`
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                webAjax: 'web-ajax'
            })
        ]
    }, pageConf);
    console.log("this is platform")
    return platformConf;
}

module.exports = loadPlatformConf;