import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperHomeCmp } from './styled';

declare const intl: any;

type props = {
    history: any
}

export default class Home extends React.Component<props> {
    constructor(props: props) {
        super(props);
    }

    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>
                        <Row>{intl.get('home.content')}</Row>
                        <Row>这个页面拥有layout，并且不需要验证登录态</Row>
                    </Col>
                    <Button onClick={() => this.props.history.push("/reg")}>Go To Reg</Button>
                </Row>
            </WrapperHomeCmp>
        );
    }
}