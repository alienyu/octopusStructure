import React,{Component} from 'react'
import { hashHistory} from 'react-router';
import { message } from 'antd';

let env = process.env.NODE_ENV;
let perConf = env == "production" ? require(`buildConf/releaseConfig.json`) : require(`buildConf/devConfig.json`);
let mode = perConf.mode;
module.exports = (ops) => {
    let config = Object.assign({
        url: "",
        data: "",
        handlerErr: false,
        callback: function() {}
    }, ops);
    if(config.url.match(/^\//)) {config.url = config.url.substr(1, config.url.length)}
    webBizMask.showMask();
    if(mode == "local") {
        webBizMask.hideMask();
        var data = require(`web-biz-mock/${config.url}.json`);
        setTimeout(() => {
            var consoleData = {
                requestUrl: config.url,
                requestParams: config.data,
                responseData: data.data
            }
            console.log(consoleData)
            config.callback.call(this, data.data);
        },200)
    } else {
        $.ajax({
            url: "/pc/" + config.url,
            type: "post",
            headers: {token: localStorage.getItem("token")},
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(config.data),
            success: function(data) {
                webBizMask.hideMask();
                if(config.handlerErr) {
                    config.callback.call(this, data);
                } else {
                    if(data.status == "E000") {
                        config.callback.call(this, data.data);
                    } else {
                        if(data.status == "E006") {
                            let currentPath = location.hash.split("#")[1].split("?")[0];
                            hashHistory.push({
                                pathname: "/common/login",
                                search: "?returnPath=" + currentPath
                            });
                        } else {
                            message.error(data.errMsg, 1);
                        }
                    }
                }
            }
        });
    }
};