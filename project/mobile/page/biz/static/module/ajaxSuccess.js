import { Toast } from 'vant'
module.exports = (text, callback) => {
    Toast.success({message: text, duration: 1000});
    setTimeout(callback, 1000);
};