import React from "react";
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col, Layout, LocaleProvider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'web-headerCmp';
import WebMenuBar from 'web-menuBarCmp';
import WebFooter from 'web-footerCmp';
import Home from './routes/home';
import Login from './routes/login';
import SubRouter from './routes/subRouter';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from 'web-bizA-locales';
import langStore from 'web-mobx/lang';

@observer
export default class App extends React.Component {
    render() {
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })

        return (
            <LocaleProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/bizA">
                    <Layout>
                        <Header><WebHeader /></Header>
                        <Layout>
                            <Sider><WebMenuBar /></Sider>
                            <Content style={{ height: 'calc(100vh - 156px)' }}>
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/subRouter" component={SubRouter} />
                                </Switch>
                            </Content>
                        </Layout>
                        <Footer style={{ background: '#d8d9da' }}><WebFooter /></Footer>
                    </Layout >
                </Router>
            </LocaleProvider>
        );
    }
}