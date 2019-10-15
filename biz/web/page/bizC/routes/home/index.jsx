import React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperHomeCmp } from './styled.js';

export default class Home extends React.Component {
    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>
                        <Row>{intl.get('home.content')}</Row>
                        <Row>这个例子中根路由"/"没有自己的独立组件，所有顶层路由通过配置方式平铺，layout作为高阶组件封装各顶层路由对应的组件外层。</Row>
                    </Col>
                    <Button onClick={() => this.props.history.push("/reg")}>Go To Reg</Button>
                </Row>
            </WrapperHomeCmp>
        );
    }
}