import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { authToken, bizLayout } from "@web-bizC-hoc";

//Take care about the sequence of redirect config
const routesConf= [{
    path: "home",
    layout: true,
    auth: true
},{
    path: 'login',
    layout: true
},{
    path: "other",
    auth: true
},{
    path: "subRouter",
    layout: true,
    routes: [{
        path: 'subRouterA'
    }, {
        path: "subRouterB"
    }]
},{
    from: "/reg",
    to: "/login"
},{
    from: "/",
    to: "/home"
}];

const renderRootRoutes = () => {
    let routesCmp = [];
    routesConf.map((route, key) => {
        if (route.from) {
            routesCmp.push(<Redirect from={route.from} to={route.to} key={key} />);
        } else {
            routesCmp.push(<Route 
                path={`/${route.path}`} 
                key={key} 
                exact={route.exact} 
                render={props => renderRouteCmp(route, props)} 
            />)
        }
    })
    return <Switch>{routesCmp}</Switch>
}

const renderRouteCmp = (routeCfg, props) => {
    let Component = React.lazy(() => import(/* webpackChunkName: "web/bizC/chunk/[request]" */  `./routes/${routeCfg.path}`));
    //TODO: we need use compose plugin
    if(routeCfg.layout) {
        Component = bizLayout(Component)
    } 
    if(routeCfg.auth) {
        Component = authToken(Component);
    }
    return React.createElement(Component, {...props, routes: routeCfg.routes}, null);
}

export default renderRootRoutes;

