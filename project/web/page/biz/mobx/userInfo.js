import React from 'react';
import { observable, useStrict, action } from 'mobx';
useStrict(true);

class UserInfo {
    @observable userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")): {
        name: "",
        type: ""
    };

    @action changeUserInfo(userData) {
        this.userInfo = userData;
        localStorage.setItem("userInfo", JSON.stringify(userData));
    }

    @action clearUserInfo() {
        this.changeUserInfo({});
        localStorage.setItem("token", "");

    }
}

var user = new UserInfo();

module.exports = user;