import * as React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from 'antd';

declare const Loadable: any;

interface routesProps {
    path?: string
}

type props = {
    routes: Array<routesProps>;
    match: any;
}

export default class SubRouter extends React.Component<props, {}> {
    render() {
        return (
            <Row type="flex" justify="center" align="middle" className="pageFrame">
                <Col span={18}>这里演示嵌套路由</Col>
                <Switch>
                    {
                        this.props.routes.map((route: routesProps, key: number) => {
                            let Component = Loadable({
                                loader: ():any => import(/* webpackChunkName: "web/bizA/chunk/subRouter/[request]" */  `../../routes/subRouter/${route.path}`),
                                loading:():any => {return null}
                            })
                            return <Route path={`${this.props.match.url}/${route.path}`} key={key} component={Component} />
                        })
                    }
                    {/* <Route path={`${this.props.match.url}/subRouterA`} component={subRouterA} />
                    <Route path={`${this.props.match.url}/subRouterB`} component={subRouterB} /> */}
                </Switch>
            </Row>
        );
    }
}