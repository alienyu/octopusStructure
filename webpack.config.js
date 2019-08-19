module.exports = {
    mode: "development",
    devtool: 'inline-source-map',  //webpack版本更新，要求添加该option，
                           //官网解释：which is good for illustrative purposes
    entry: "./biz/web/page/ssr/browser.js",       //入口文件，就是想要打包的文件入口
    output: {                  //打包后的文件
        path: __dirname,  
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};