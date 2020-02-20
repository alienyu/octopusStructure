import * as React from "react";
import { Row, Col } from 'antd';

export default class SubRouterA extends React.Component {
    render() {
        return (
            <Row type="flex" justify="center" align="middle" className="pageFrame">
                <Col span={18}>这是嵌套路由A的页面</Col>
            </Row>
        )
    }
}