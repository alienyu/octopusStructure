import React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from 'antd';
import subRouterA from "./subRouterA";
import subRouterB from "./subRouterB";

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
                        this.props.routes.map((value, key) => {
                            return <Route path={`${this.props.match.url}${value.path}`} key={key} component={value.component} />
                        })
                    }
                    {/* <Route path={`${this.props.match.url}/subRouterA`} component={subRouterA} />
                    <Route path={`${this.props.match.url}/subRouterB`} component={subRouterB} /> */}
                </Switch>
            </Row>
        );
    }
}