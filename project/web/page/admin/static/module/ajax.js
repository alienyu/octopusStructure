import React,{Component} from 'react'
import { hashHistory} from 'react-router';
import { message } from 'antd';
import {observer} from 'mobx-react/index';
import loadingMaskStore from 'web-admin-loadingMaskStore';

let env = process.env.NODE_ENV;

let perConf = env == "production" ? require(`buildConf/releaseConfig.json`) : require(`buildConf/devConfig.json`);
let mode = perConf.mode;

const Ajax = observer(React.createClass({
    ajax(ops) {
        let config = Object.assign({
            url: "",
            data: "",
            handleResponse: false,
            callback: function() {}
        }, ops);
        if(config.url.match(/^\//)) {config.url = config.url.substr(1, config.url.length)}
        if(mode == "local") {
            var data = require(`web-admin-mock/${config.url}.json`);
            setTimeout(() => {
                var consoleData = {
                    requestUrl: config.url,
                    requestParams: config.data,
                    responseData: data
                }
                console.log(consoleData)
                config.callback.call(this, config.handleResponse ? data : data.data);
            },200)
        } else {
            loadingMaskStore.changeStatus(true);
            $.ajax({
                url: "/admin/" + config.url,
                type: "post",
                headers: {token: localStorage.getItem("token")},
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(config.data),
                success: function(data) {
                    loadingMaskStore.changeStatus(false);
                    if(data.status == 1001) {
                        let currentPath = location.hash.split("#")[1].split("?")[0];
                        hashHistory.push({
                            pathname: "/common/login",
                            search: "?returnPath=" + currentPath
                        });
                    } else if(config.handleResponse) {
                        config.callback.call(this, data);
                    } else 
                        if(data.status != 200) {
                            message.error(data.errMsg, 1, () => {
                                localtion.reload();
                            });
                    } else {
                        config.callback.call(this, data.data);
                    }
                }
            });
        }
    },
    render() {}
}))

const ajaxObj = new Ajax();
module.exports = ajaxObj.ajax;