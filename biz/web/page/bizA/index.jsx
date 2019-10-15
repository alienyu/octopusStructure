import React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from 'web-bizA-locales';

import { authToken } from "web-bizA-hoc";

import Login from './routes/login';
import Other from "./routes/other";
import bizLayout from "./routes/layout";

@inject("langStore")
@observer
export default class App extends React.Component {
    render() {
        const { langStore } = this.props; 
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })

        return (
            <ConfigProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/bizA">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/other" component={authToken(Other)} />
                        <Route path="/" component={bizLayout} />
                    </Switch>
                </Router>
            </ConfigProvider>
        );
    }
}