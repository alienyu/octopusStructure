import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { bizLayout } from "web-bizC-hoc";

//Take care about the sequence of redirect config
const routesConf= [{
    path: "home",
    layout: true
},{
    path: 'login',
    layout: true
},{
    path: "other"
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
    let Component = React.lazy(() => import(/* webpackChunkName: "web/bizA/[request]" */  `./routes/${routeCfg.path}`));
    if(routeCfg.layout) {
        return bizLayout(Component)({...props, routes: routeCfg.routes})
    } else {
        return <Component {...props} routes={routeCfg.routes} />;
    }
}

export default renderRootRoutes;

