import Home from "./routes/home";
import Login from "./routes/login";
import SubRouter from "./routes/subRouter";
import SubRouterA from "./routes/subRouter/subRouterA";
import SubRouterB from "./routes/subRouter/subRouterB"

export default [{
    path: "/",
    component: Home,
    exact: true
}, {
    path: "/login",
    component: Login
}, {
    path: "/subRouter",
    component: SubRouter,
    routes: [{
        path: "/subRouterA",
        component: SubRouterA,
    }, {
        path: "/subRouterB",
        component: SubRouterB,
    }]
}]

