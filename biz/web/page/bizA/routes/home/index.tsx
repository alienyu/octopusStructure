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
                        <Row>这个例子中根路由"/"有自己的独立组件layout，因此顶层路由中必须区分是否包含此layout，包含Layout的路由需在layout组件中处理。并且"/"路径对应两个路由组件Layout和首页。</Row>
                    </Col>
                    <Button onClick={() => this.props.history.push("/reg")}>Go To Reg</Button>
                </Row>
            </WrapperHomeCmp>
        );
    }
}