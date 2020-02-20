import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { WrapperOtherCmp } from './styled';

type props = {
    type: string,
    history?: any
}

@(withRouter as any)
export default class Other extends React.Component<props, {}> {
    constructor(props: props) {
        super(props)
    }

    render() {
        return (
            <WrapperOtherCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>公用组件</Col>
                    <Button onClick={() => this.props.history.push(this.props.type == "1" ? "/noLayoutPage" : "layoutPage")}>{this.props.type == "1" ? "去noLayoutPage" : "去layoutPage"}</Button>
                    <Button onClick={() => this.props.history.push("/")}>回首页</Button>
                </Row>
            </WrapperOtherCmp>
        );
    }
}