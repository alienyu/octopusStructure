import React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@webWholeCaseLocales/index';
import renderRoutes from "webWholeCaseRenderRoutes";
import { loadGlobalVar } from 'webWholeCaseGlobalConf';
loadGlobalVar();

type AppProps = {
    langStore?: any
}

@inject("langStore")
@observer
export default class App extends React.Component<AppProps, {}> {
    constructor(props:AppProps) {
        super(props);
    }

    render() {
        const { langStore } = this.props;
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })

        return (
            <ConfigProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/wholeCase">
                    {renderRoutes()}
                </Router>
            </ConfigProvider>
        );
    }
}