import React,{Component} from 'react'
import { hashHistory} from 'react-router';
import { message } from 'antd';
import ajaxLoadingStore from 'web-mobx/loadingMask';
import Axios from 'axios';

let env = process.env.NODE_ENV;
let perConf = env == "production" ? require(`buildConf/releaseConfig.json`) : require(`buildConf/devConfig.json`);
let mode = perConf.mode;
module.exports = (ops) => {
    let config = Object.assign({
        url: "",
        method: 'post',
        data: "",
        handlerErr: false,
        callback: function() {}
    }, ops);
    if(config.url.match(/^\//)) {config.url = config.url.substr(1, config.url.length)}
    ajaxLoadingStore.changeStatus(true);
    if(mode == "local") {
        var data = require(`web-mock/${config.url}.json`);
        setTimeout(() => {
            var consoleData = {
                requestUrl: config.url,
                requestParams: config.data,
                responseData: data.data
            }
            console.log(consoleData)
            ajaxLoadingStore.changeStatus(false);
            config.callback.call(this, data.data);
        },2000)
    } else {
        ajaxLoadingStore.changeStatus(true);
        Axios({
            method: config.method,
            url: config.url,
            data: config.data
        }).then((data) => {
            ajaxLoadingStore.changeStatus(false);
            config.callback.call(this, Object.assign({success: true}, data));
        }).catch((error) => {
            ajaxLoadingStore.changeStatus(false);
            if(config.handlerErr) {
                config.callback.call(this, Object.assign({success: false}, error.response));
            } else {
                message.error(error.response.data.errorMessage);
            }
        }) 
    }
};