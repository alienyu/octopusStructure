import * as React from "react";
import { observer, inject } from 'mobx-react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'webHeaderCmp';
import WebMenuBar from 'webMenuBarCmp';
import WebFooter from 'webFooterCmp';
import renderRoutes from "webBizARenderRoutes";

type props = {
    userStore: any,
    history?: History
}

@inject("userStore")
@observer
class BizLayout extends React.Component<props, {}>{
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        const { userStore, history } = this.props;
        if(!userStore.userInfo.token) {
            history.push("/login");
        }
    }

    render() {
        return (
            <Layout>
                <Header><WebHeader /></Header>
                <Layout>
                    <Sider><WebMenuBar /></Sider>
                    <Content style={{ height: 'calc(100vh - 156px)' }}>
                        {renderRoutes()}
                    </Content>
                </Layout>
                <Footer style={{ background: '#d8d9da' }}><WebFooter /></Footer>
            </Layout >
        )
    }
}

export default withRouter(BizLayout);
