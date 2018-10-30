import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import { Layout, Button, Modal, Popconfirm, message } from 'antd';
const { Header } = Layout;

export class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        ['showModal', 'handleSave', 'hideModal', 'logout'].forEach(m=>this[m] = this[m].bind(this))
    }

    showModal() {
        this.setState({
            visible: true
        });
    }

    hideModal() {
        this.setState({
            visible: false
        });
    }
    handleSave() {
        this.formRef.handleSubmit();
    }

    logout() {
        webAdminAjax({
            url: "/logout",
            method: "post",
            data: {},
            callback: function(data) {
                hashHistory.push("/common/login");
            }
        });
    }

    render() {
        return (
            <Header className="header">
                <div className="logo">管理后台</div>
                <div className="info">
                    <div className="name">您好! {localStorage.getItem("name")}</div>
                    <div className="btns">
                        <Button type="primary" style={{"marginRight":"10px"}} onClick={this.showModal}>修改密码</Button>
                        <Popconfirm placement="bottom" title="是否确认退出?" onConfirm={this.logout} okText="Yes" cancelText="No">
                            <Button>退出</Button>
                        </Popconfirm>
                    </div>
                </div>
            </Header>
        )
    }
}

module.exports = AdminHeader;