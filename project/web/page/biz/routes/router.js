module.exports = Object.assign({
    path: "/",
    breadcrumbName: "首页",
    getComponent: function(location, cb) {
        require.ensure([], function(require) {
            cb(null, require("./layout/components/layout.jsx"))
        }, 'web/biz/chunk/layout')
    },
    getIndexRoute(nextState, cb) {
        require.ensure([], function(require) {
            cb(null, {
                breadcrumbName: '首页',
                component: require("./layout/components/index.jsx")
            })
        }, 'web/biz/chunk/index')
    }
}, webBizRouteEnter);