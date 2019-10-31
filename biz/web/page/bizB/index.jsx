import React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Layout from './routes/layout';
import NoLayout from './routes/noLayout';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@web-bizB-locales';

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
                <Router basename="/web/bizB">
                    <Switch>
                        <Route path="/noLayout" component={NoLayout} />
                        <Route path="/" component={Layout} />
                    </Switch>
                </Router>
            </ConfigProvider>
        );
    }
}