module.exports = {
    path: "/home",
    component: resolve => require.ensure([], (require) => {
        resolve(require('./components/home.vue'))
    }, 'mobile/biz/chunk/home')
};