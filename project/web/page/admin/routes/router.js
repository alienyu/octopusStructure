module.exports = [
    Object.assign({
        path: "/",
        breadcrumbName: "管理后台",
        getComponent: function(location, cb) {
            require.ensure([], function(require) {
                cb(null, require("./layout/components/index.jsx"))
            }, 'web/admin/chunk/manage')
        },
        getIndexRoute(nextState, cb) {
            require.ensure([], function(require) {
                cb(null, {
                    breadcrumbName: '欢迎页',
                    component: require("./layout/components/welcome.jsx")
                })
            }, 'web/admin/chunk/welcome')
        }
    }, webAdminRouteEnter)
];