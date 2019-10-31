import { observable, action } from 'mobx';

class AjaxLoadingStore {
    @observable status = false;

    @action changeStatus(val: boolean) {
        this.status = val;
    }
}

export default AjaxLoadingStore;
