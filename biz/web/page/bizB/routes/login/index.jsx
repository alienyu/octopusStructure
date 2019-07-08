import React from "react";
import { Row, Col } from 'antd';
import { WrapperLoginCmp } from './styled';

export default class Login extends React.Component {
    render() {
        return (
            <WrapperLoginCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>This is login page of BizB</Col>
                </Row>
            </WrapperLoginCmp>
        );
    }
}