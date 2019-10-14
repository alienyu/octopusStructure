import React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from 'web-bizA-locales';

import bizLayout from "./routes/layout";
import Other from "./routes/other";

import renderRoutes from "web-bizA-renderRoutes";

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
                        <Route path="/other" component={Other} />
                        <Route path="/" component={bizLayout} />
                    </Switch>
                    {/* {renderRoutes()} */}
                </Router>
            </ConfigProvider>
        );
    }
}