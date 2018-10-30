import { Toast } from 'vant'
import { isUndefined } from 'util';
let env = process.env.NODE_ENV;

let perConf = env == "production" ? require(`buildConf/releaseConfig.json`) : require(`buildConf/devConfig.json`);
let mode = perConf.mode;
module.exports = (ops) => {
    let config = Object.assign({
        type: "POST",
        url: "",
        data: {token: localStorage.getItem("token")},
        callback: function() {}
    }, ops);
    mobileBizStore.dispatch("showAjaxMask");
    if(mode == "local") {
        mobileBizStore.dispatch("hideAjaxMask");
        if(config.url.match(/^\//)) {config.url = config.url.substr(1, config.url.length)}
        var data = require(`mobile-biz-mock/${config.url}.json`);
        if(config.handleError) {
            setTimeout(() => {
                var consoleData = {
                    requestUrl: config.url,
                    requestParams: config.data,
                    responseData: data.data
                }
                console.log(JSON.stringify(consoleData))
                config.callback(data);
            },200)  
        } else {
            setTimeout(() => {
                var consoleData = {
                    requestUrl: config.url,
                    requestParams: config.data,
                    responseData: data.data
                }
                console.log(JSON.stringify(consoleData))
                config.callback(data.data);
            },200)  
        }
    } else {
        Vue.http({
            method: config.type,
            url: `/h5${config.url}`,
            body: config.data
        }).then(function(data) {
            mobileBizStore.dispatch("hideAjaxMask");
            return data.data;
        }, function(error) {
            Toast.fail({message: "服务器返回异常!", forbidClick: true})
        }).then(function(result) {
            if(result.status == 200) {
                config.callback(config.handleError ? result : result.data);
            } else if(result.status == 1001) {
                location.hash = "/system/login";
            } else if(result.status == 1002) {
                let currentUrl = location.href;
                location.href = `/wechat.auth?returnUrl=${currentUrl}`;
            } else {
                if(config.handleError) {
                    config.callback(result);
                } else {
                    Toast.fail({message: result.errMsg, forbidClick: true});
                }
            }               
        })
    }
};