import en from './en';
import cn from './cn';
import commLocales from '@webLocales/index'; 

export default {
    en: Object.assign(en, commLocales.en),
    cn: Object.assign(cn, commLocales.cn)
}