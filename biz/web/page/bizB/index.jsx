import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Home from './routes/home';
import Login from './routes/login';
import BizBHeader from 'web-bizB-headerCmp';
import BizBFooter from 'web-bizB-footerCmp';
import BizBMenuBar from 'web-bizB-menuBarCmp';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header><BizBHeader /></Header>
                <Layout>
                    <Sider><BizBMenuBar /></Sider>
                    <Content style={{ height: 'calc(100vh - 156px)' }}>
                        <HashRouter>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                        </HashRouter>
                    </Content>
                </Layout>
                <Footer style={{background: '#d8d9da'}}><BizBFooter /></Footer>
            </Layout>
        );
    }
}