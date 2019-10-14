import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

//Take care about the sequence of redirect config

const routesConf= [{
    path: "home"
},{
    path: "login"
},{
    path: "subRouter",
    routes: [{
        path: "subRouterA"
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
            let Component = Loadable({
                loader: () => import(/* webpackChunkName: "web/bizA/chunk/[request]" */  `./routes/${route.path}`),
                loading:() => {return null}
            })
            // let Component = React.lazy(() => import(/* webpackChunkName: "web/bizA/[request]" */  `./routes/${route.path}`));
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

