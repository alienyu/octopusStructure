import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Row, Col, Layout, LocaleProvider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'webHeaderCmp';
import WebMenuBar from 'webMenuBarCmp';
import WebFooter from 'webFooterCmp';
import Home from '../home';
import Login from '../login';

export default class BizLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Header><WebHeader /></Header>
                <Layout>
                    <Sider><WebMenuBar /></Sider>
                    <Content style={{ height: 'calc(100vh - 156px)' }}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </Content>
                </Layout>
                <Footer style={{ background: '#d8d9da' }}><WebFooter /></Footer>
            </Layout >
        )
    }
}