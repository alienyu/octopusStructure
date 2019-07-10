import React from "react";
import { Row, Col } from 'antd';
import { WrapperHomeCmp } from './styled';

export default class Home extends React.Component {
    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>This is home page of BizB</Col>
                </Row>
            </WrapperHomeCmp>
        );
    }
}