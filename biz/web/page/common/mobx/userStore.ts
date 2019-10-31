import { observable, action } from 'mobx';

type userInfoPrpos = {
    userName?: string,
    token?: string
}

class UserInfoStore {
    @observable userInfo:userInfoPrpos;

    constructor() {
        this.userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
    }

    @action clearUserInfo() {
        this.userInfo = {};
        localStorage.removeItem('userInfo',);
    }
    @action changeUserInfo(object:userInfoPrpos): void {
        this.userInfo = Object.assign({}, this.userInfo, object);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }

}

export default UserInfoStore;
