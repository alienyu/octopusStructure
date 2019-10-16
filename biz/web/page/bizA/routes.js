import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

//Take care about the sequence of redirect config
const routesConf= [{
    path: ""
},{
    path: "home",
    layout: true
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
}];

const renderRootRoutes = () => {
    let routesCmp = [];
    routesConf.map((route, key) => {
        let Component = Loadable({
            loader: () => import(/* webpackChunkName: "web/bizA/chunk/[request]" */  `./routes/${route.path || "home"}`),
            loading:() => {return null}
        })
        if (route.from) {
            routesCmp.push(<Redirect from={route.from} to={route.to} key={key} />);
        } else {
            routesCmp.push(<Route 
                path={`/${route.path}`} 
                key={key} 
                exact={route.exact} 
                render={props => <Component {...props} routes={route.routes} />}
            />)
        }
    })
    return <Switch>{routesCmp}</Switch>
}

export default renderRootRoutes;

