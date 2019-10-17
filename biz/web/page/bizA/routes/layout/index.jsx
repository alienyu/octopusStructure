import React from "react";
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'web-headerCmp';
import WebMenuBar from 'web-menuBarCmp';
import WebFooter from 'web-footerCmp';
import renderRoutes from "web-bizA-renderRoutes";

@inject("userStore")
@observer
@withRouter
export default class BizLayout extends React.Component {
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
