import React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperOtherCmp } from './styled';

export default class Other extends React.Component {
    render() {
        return (
            <WrapperOtherCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>测试页面</Col>
                    <Button onClick={() => this.props.history.push("/")}>去首页</Button>
                </Row>
            </WrapperOtherCmp>
        );
    }
}