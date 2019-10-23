import React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from 'antd';
import Loadable from 'react-loadable';

export default class SubRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row type="flex" justify="center" align="middle" className="pageFrame">
                <Col span={18}>这里演示嵌套路由</Col>
                <Switch>
                    {
                        this.props.routes.map((route, key) => {
                            let Component = Loadable({
                                loader: () => import(/* webpackChunkName: "web/bizC/chunk/subRouter/[request]" */  `../../routes/subRouter/${route.path}`),
                                loading:() => {return null}
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