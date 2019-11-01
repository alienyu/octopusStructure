import { message } from 'antd';
import { ajaxLoadingStore } from '@webMobx/index';
import Axios from 'axios';

const env = process.env.NODE_ENV;
const perConf = env == "production" ? require(`@buildConf/releaseConfig.json`) : require(`@buildConf/devConfig.json`);
const mode = perConf.mode;

class Ajax {
    ajax(ops: any): any {
        let config = Object.assign({
            url: "",
            data: "",
            method: "post",
            handlerErr: false,
            callback: function() {}
        }, ops);
        if(config.url.match(/^\//)) {config.url = config.url.substr(1, config.url.length)};
        ajaxLoadingStore.changeStatus(true);
        if(mode == "local") {
            var data = require(`@webMock/${config.url}.json`);
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
            Axios({
                method: config.method,
                url: config.url,
                data: config.data
            }).then((data: any) => {
                ajaxLoadingStore.changeStatus(false);
                config.callback.call(this, Object.assign({success: true}, data));
            }).catch((error: any) => {
                ajaxLoadingStore.changeStatus(false);
                if(config.handlerErr) {
                    config.callback.call(this, Object.assign({success: false}, error.response));
                } else {
                    message.error(error.response.data.errorMessage);
                }
            }) 
        }
    }
}

var ajaxObj = new Ajax();
export default ajaxObj.ajax;