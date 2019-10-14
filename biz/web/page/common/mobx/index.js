import AjaxLoadingStore from './ajaxLoadingStore';
import LangStore from './langStore';
import UserStore from './userStore';

const ajaxLoadingStore = new AjaxLoadingStore();
const langStore = new LangStore();
const userStore = new UserStore();

const stores = {
    ajaxLoadingStore,
    langStore,
    userStore
}

export { stores as default, ajaxLoadingStore };