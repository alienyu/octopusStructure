import { Toast } from 'vant'

module.exports = (text) => {
    Toast.fail({message: text, duration: 1000});
};