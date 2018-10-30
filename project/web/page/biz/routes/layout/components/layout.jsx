import React,{Component} from 'react'
import { Layout } from 'antd';
const { Content } = Layout;
import BizHeader from "./header.jsx";
import BizFooter from "./footer.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout>
                <BizHeader />
                <Content style={{background: '#f3f3f3'}}>
                    {this.props.children}
                </Content>
                <BizFooter />
            </Layout>
        )
    }
}
module.exports = App;