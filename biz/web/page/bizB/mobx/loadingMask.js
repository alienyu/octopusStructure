import { observable, action } from 'mobx';

class AjaxLoadingStore {
    @observable status = false;

    @action changeStatus(val) {
        this.status = val;
    }
}

export default new AjaxLoadingStore();
