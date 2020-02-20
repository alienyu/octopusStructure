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
                '@webComponents': `${path.resolve(__dirname, 'common/components')}`,
                '@webMock': `${path.resolve(__dirname, 'common/mockData')}`,
                '@webMobx': `${path.resolve(__dirname, 'common/mobx')}`,
                '@webLocales': `${path.resolve(__dirname, 'common/static/locales')}`,
                'webHeaderCmp': `${path.resolve(__dirname, 'common/components/layout/header.tsx')}`,
                'webFooterCmp': `${path.resolve(__dirname, 'common/components/layout/footer.tsx')}`,
                'webMenuBarCmp': `${path.resolve(__dirname, 'common/components/layout/menuBar.tsx')}`,
                'webConstants': `${path.resolve(__dirname, 'common/static/Constants.ts')}`,
                'webAjax': `${path.resolve(__dirname, 'common/static/module/ajax.ts')}`
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                webAjax: ['webAjax', 'default']
            })
        ]
    }, pageConf);
    console.log("this is platform")
    return platformConf;
}

module.exports = loadPlatformConf;