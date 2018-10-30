import {observer} from 'mobx-react';
import userStore from 'web-biz-userStore'

module.exports = {
    getUserInfo(key) {
        if(localStorage.getItem("userInfo")) {
            return JSON.parse(localStorage.getItem("userInfo"))[key];
        } else {
            return "";
        }
    },
    setUserInfo(userData) {
        localStorage.setItem("userInfo", JSON.stringify(userData));
    },
    setToken(token) {
        localStorage.setItem("token", token);
    }
};