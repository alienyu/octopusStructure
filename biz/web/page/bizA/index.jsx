import React, { Suspense } from "react";
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Row, Col, Layout, LocaleProvider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import WebHeader from 'web-headerCmp';
import WebMenuBar from 'web-menuBarCmp';
import WebFooter from 'web-footerCmp';
import routes from "web-bizA-routesConf";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from 'web-bizA-locales';
import langStore from 'web-mobx/lang';

@observer
export default class App extends React.Component {
    fallback = () => {
        return <Row type="flex" justify="center" align="middle">Loading...</Row>;
    }

    render() {
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })

        return (
            <LocaleProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/bizA">
                    <Suspense fallback={this.fallback()}>
                        <Layout>
                            <Header><WebHeader /></Header>
                            <Layout>
                                <Sider><WebMenuBar /></Sider>
                                <Content style={{ height: 'calc(100vh - 156px)' }}>
                                    <Switch>
                                        {/* <Route path="/" exact component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/subRouter" component={SubRouter} /> */}
                                        {
                                            routes.map((value, key) => {
                                                if (value.redirect) {
                                                    return <Redirect from={value.from} to={value.to} key={key} />
                                                } else {
                                                    return <Route path={value.path} key={key} exact={value.exact} render={
                                                        props => (<value.component {...props} routes={value.routes} />)
                                                    }
                                                    />
                                                }
                                            })
                                        }
                                    </Switch>
                                </Content>
                            </Layout>
                            <Footer style={{ background: '#d8d9da' }}><WebFooter /></Footer>
                        </Layout >
                    </Suspense>
                </Router>
            </LocaleProvider>
        );
    }
}