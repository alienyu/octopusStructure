import React from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { WrapperNoLayoutCmp } from './styled';

@withRouter
export default class NoLayout extends React.Component {
    render() {
        return (
            <WrapperNoLayoutCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>{intl.get('noLayout.content')}</Col>
                </Row>
                <Button onClick={() => {this.props.history.push("/")}}>Go To Index</Button>
                <Button onClick={() => {this.props.history.push("/login")}}>Go To Login Page</Button>
            </WrapperNoLayoutCmp>
        );
    }
}