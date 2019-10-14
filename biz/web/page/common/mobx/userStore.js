import { observable, action } from 'mobx';

class UserInfoStore {
    @observable userInfo;

    constructor() {
        this.userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
    }

    @action clearUserInfo() {
        this.userInfo = {};
        localStorage.removeItem('userInfo',);
    }
    @action changeUserInfo(object) {
        this.userInfo = Object.assign({}, this.userInfo, object);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }

}

export default UserInfoStore;
