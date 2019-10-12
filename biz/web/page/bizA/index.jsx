import React, { Suspense } from "react";
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Row, Col, Layout, ConfigProvider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'web-headerCmp';
import WebMenuBar from 'web-menuBarCmp';
import WebFooter from 'web-footerCmp';
import renderRoutes from "web-bizA-renderRoutes";
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
            <ConfigProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/bizA">
                    <Layout>
                        <Header><WebHeader /></Header>
                        <Layout>
                            <Sider><WebMenuBar /></Sider>
                            <Content style={{ height: 'calc(100vh - 156px)' }}>
                                <Switch>
                                    {renderRoutes()}
                                </Switch>
                            </Content>
                        </Layout>
                        <Footer style={{ background: '#d8d9da' }}><WebFooter /></Footer>
                    </Layout >
                </Router>
            </ConfigProvider>
        );
    }
}