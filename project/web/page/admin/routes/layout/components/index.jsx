import React,{Component} from 'react'
import { Spin, Layout } from 'antd';
const { Sider } = Layout;
import Header from "./header.jsx";
import MenuBar from "./menuBar.jsx";
import loadingMaskStore from 'web-admin-loadingMaskStore';
import {observer} from 'mobx-react';

@observer
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Spin spinning={loadingMaskStore.status} tip="Loading...">
                <Layout>
                    <Header />
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <MenuBar location={this.props.location} />
                        </Sider>
                        {this.props.children}
                    </Layout>
                </Layout>
            </Spin>
        )
    }
}
module.exports = App;