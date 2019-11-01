import * as React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@webBizALocales/index';

import { authToken } from "@webBizAHoc/index";

import Login from './routes/login';
import Other from "./routes/other";
import bizLayout from "./routes/layout";

declare const intl: any;
type props = {
    langStore?: any
}

@inject("langStore")
@observer
export default class App extends React.Component<props, {}> {
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