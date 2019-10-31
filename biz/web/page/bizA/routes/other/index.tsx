import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperOtherCmp } from './styled';

type props = {
    history: any
}

export default class Other extends React.Component<props, {}> {
    constructor(props: props) {
        super(props)
    }

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