let webpack = require('webpack');
let path =require("path");
console.log("this is page")
module.exports = {
    resolve: {
        alias: {
            "mobile-biz-ajax": `${path.resolve(__dirname, 'static/module/ajax.js')}`,
            "mobile-biz-ajaxSuccess": `${path.resolve(__dirname, 'static/module/ajaxSuccess.js')}`,
            "mobile-biz-formValidError": `${path.resolve(__dirname, 'static/module/formValidError.js')}`,
            "mobile-biz-mock": `${path.resolve(__dirname, 'mockData')}`,
            "mobile-biz-store": `${path.resolve(__dirname, "store/index.js")}`,
            "mobile-biz-imgs": `${path.resolve(__dirname, "static/imgs")}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'mobileBizAjax': 'mobile-biz-ajax',
            'mobileBizAjaxSuccess': 'mobile-biz-ajaxSuccess',
            "mobileBizFve": "mobile-biz-formValidError",
            "mobileBizStore": "mobile-biz-store"
        })
    ]
}