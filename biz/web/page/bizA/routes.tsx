import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

declare const Loadable: any;

//Take care about the sequence of redirect config
const routesConf= [{
    path: "",
    exact: true
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
    routesConf.map((route: routeTypes, key: number):void => {
        let Component: any = Loadable({
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
                render={(props) => <Component {...props} routes={route.routes} />}
            />)
        }
    })
    return <Switch>{routesCmp}</Switch>
}

export default renderRootRoutes;

