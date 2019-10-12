let path = require('path');
let webpack = require('webpack');
let env = process.env.NODE_ENV;
let deployContent = !env ? require("../config/devConfig.json")["deployContent"] : require("../config/releaseConfig.json")["deployContent"];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

var baseConf = {
    output: {
        filename: '[name].js',           //每个页面对应的主js的生成配置
        chunkFilename: '[name].[chunkhash].chunk.js'   //chunk生成的配置
    },
    plugins: [
        new MiniCssExtractPlugin('[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publicePath
        new LodashModuleReplacementPlugin(),
        new webpack.HotModuleReplacementPlugin(), //热加载
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // new BundleAnalyzerPlugin({ analyzerPort: 8919 })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.jsx'],
        alias: {
            'common-css': process.cwd() + "/common/assets/css/common.less",
            'common-imgs': process.cwd() + "/common/assets/imgs"
        }
    },
    module: {
        rules: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }, {
                test: /\.css$/,
                //配置css的抽取器、加载器。'-loader'可以省去
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }, {
                test: /\.less$/,
                //配置less的抽取器、加载器。中间!有必要解释一下，
                //根据从右到左的顺序依次调用less、css加载器，前一个的输出是后一个的输入
                //你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    
                    "css-loader",
                    "less-loader"
                ]
            }, {
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attrs: [':src'],
                    minimize: false
                }
            }, {
                //文件加载器，处理文件静态资源
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: `file-loader`,
                options: {
                    name: "common/fonts/[name].[ext]"
                }
            }, {
                //多媒体加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                //如下配置，将小于8192byte的图片转成base64码
                test: /\.(mp4|flv)$/,
                loader: `url-loader`,
                options: {
                    name: "common/media/[hash].[ext]"
                }
            }
        ]
    }
}

function loadBizAssets(oriConf) {
    // {
    //     test: /\/web\/page\/biz\/.*\.(png|jpg|gif|jpeg)$/,
    //     loader: `url-loader?limit=8192&name=web/biz/common/imgs/[hash].[ext]`
    // }
    let platformList = Object.keys(deployContent);
    platformList.map(platform => {
        let pageList = deployContent[platform].length > 0 ? deployContent[platform] : require(`${process.cwd()}/biz/${platform}/platformConf.json`)["pageList"];
        pageList.map(page => {
            oriConf.module.rules.push({
                test: new RegExp(`\/${platform}\/page\/${page}\/.*\.(png|jpg|gif|jpeg)$`),
                use: `url-loader?limit=8192&name=${platform}/${page}/assets/imgs/[hash].[ext]`
            })
        })
    })
    return oriConf;
}
module.exports = loadBizAssets(baseConf);