import { observable, action } from 'mobx';

class LangStore {
    @observable currentLang:string;

    constructor() {
        this.currentLang = localStorage.getItem('currentLang') ? localStorage.getItem('currentLang') : 'en';
    }

    @action changeLang(val: string):void {
        this.currentLang = val;
        localStorage.setItem('currentLang', this.currentLang);
    }
}

export default LangStore;
