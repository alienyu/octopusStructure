import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { authToken, bizLayout } from "@webWholeCaseHoc/index";

//Take care about the sequence of redirect config
const routesConf= [{
    path: "home",
    layout: true
},{
    path: 'login',
    layout: true
},{
    path: "layoutPage",
    layout: true,
    auth: true
},{
    path: "noLayoutPage",
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

type routeTypes = {
    from?: string,
    to?: string,
    path?: string,
    exact?: boolean,
    layout?: boolean,
    routes?: any
}

const renderRootRoutes = ():any => {
    let routesCmp:Array<JSX.Element> = [];
    routesConf.map((route:routeTypes, key:number) => {
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
    let Component: any = Loadable({
        loader: () => import(/* webpackChunkName: "web/wholeCase/chunk/[request]" */  `./routes/${routeCfg.path}`),
        loading:() => {return null}
    })
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

