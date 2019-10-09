import React from "react";
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';

import Layout from './routes/layout';
import NoLayout from './routes/noLayout';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from 'web-bizB-locales';
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
                <Router basename="/web/bizB">
                    <Switch>
                        <Route path="/noLayout" component={NoLayout} />
                        <Route path="/" component={Layout} />
                    </Switch>
                </Router>
            </LocaleProvider>
        );
    }
}