import 'vant/lib/vant-css/index.css'
import "./biz.less"
import routes from './routes/router'
import app from "./routes/layout/components/app.vue";
//加载路由中间件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

//定义路由
const router = new VueRouter({
    routes
});

new Vue({
    router,
    store: mobileBizStore,
    el: "#app",
    render: h=>h(app)
});
