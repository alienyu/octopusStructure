import React from 'react';
var home = 'home';
const Home = React.lazy(() => import(/* webpackChunkName: "home" */  './routes/home?chunk=home'));
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ './routes/login'));
const SubRouter = React.lazy(() => import("./routes/subRouter"));
const SubRouterA = React.lazy(() => import("./routes/subRouter/subRouterA"));
const SubRouterB = React.lazy(() => import("./routes/subRouter/subRouterB"));
// import Home from "./routes/home";
// import Login from "./routes/login";
// import SubRouter from "./routes/subRouter";
// import SubRouterA from "./routes/subRouter/subRouterA";
// import SubRouterB from "./routes/subRouter/subRouterB"

export default [{
    redirect: true,
    from: "/reg",
    to: "/login"
}, {
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

