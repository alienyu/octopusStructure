function loadProjectConf(envConf) {
    let webpack = require('webpack');
    let merge = require("webpack-merge");
    let projectConf = {};
    //基础配置文件
    let bascConf = require(`${process.cwd()}/build/env/webpack.base.js`);
    let platformConf = {};
    let platformList = Object.keys(envConf.deployContent);
    //提取平台相关的配置文件
    platformList.map(platformName => {
        platformConf = merge(platformConf, require(`./${platformName}/webpack.platform.js`)(envConf));
    })
    console.log("this is project")

    //合并两端配置文件
    projectConf = merge(bascConf, {
        //项目通用配置（移动端和pc端共享）
        entry: {},
        resolve: {
            alias: {
                '@buildConf': `${process.cwd()}/build/config`,
                "@ant-design/icons/lib/dist$": `${process.cwd()}/biz/common/modules/antdIcons.js`,
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                intl: 'react-intl-universal',
                Loadable: 'react-loadable'
            })
        ]
    }, platformConf);
    return projectConf;
}

module.exports = loadProjectConf;
