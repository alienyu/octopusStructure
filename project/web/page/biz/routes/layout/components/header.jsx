import React,{Component} from 'react'
import { hashHistory, Link } from 'react-router'
import { Row, Col, Layout, Button, Modal, Popconfirm, Menu, Tooltip, message } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
import {observer} from 'mobx-react';
import userStore from 'web-biz-userStore';
import menu from 'web-biz-menuStore';

@observer
class bizHeader extends React.Component {
    constructor(props) {
        super(props);
        ['handleClick', 'logout'].forEach(m=>this[m] = this[m].bind(this))
    }

    logout() {
        webBizAjax({
            url: "/common/logout",
            callback(data) {
                userStore.clearUserInfo();
                hashHistory.push("/");
            }
        })
    }

    handleClick(e) {
        if(e.key == '/space') {
            if(userStore.userInfo.name || webBizCommon.getUserInfo("name")) {
                hashHistory.push(`/${userStore.userInfo.type}/space`);
            } else {
                message.error("请先登录!", 1, () => {
                    hashHistory.push("/common/login");
                });
            }
            menu.changeSpaceMenu(`/${userStore.userInfo.type}/space`);
        } else {
            hashHistory.push(e.key);
        }
        console.log(e.key)
        menu.changeHeaderMenu(e.key);
    }

    render() {
        const userName = userStore.userInfo.name || webBizCommon.getUserInfo("name");
        const logoImg = require("web-biz-imgs/logo.png");
        let currentPath = menu.currentHeaderMenu;
        return (
            <Header className="header">
                <div className="userInfoFrame">
                    <Row className="userInfo">
                        <Col span={6} className="help">客服热线: 4008-333-888</Col>
                        <Col span={6} offset={12} className="right">
                            <a href="javascript:;" className="share">分享</a>
                            <a href="javascript:;" className="download">下载手机版</a>
                            {userName ?
                                <Tooltip placement="bottom" title={<a href="javascript:;" onClick={this.logout}>退出</a>}><span className="userName">{userName}</span></Tooltip> :
                                <span><Link to="/common/login?returnUrl=xxx" className="btn">登录</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="/common/register" className="btn">注册</Link></span>
                            }
                        </Col>
                    </Row>
                </div>
                <div className="menuFrame">
                    <Row className="menu">
                        <Col span={6}>
                            <Link to="/" className="logo">
                                <img src={logoImg} />
                            </Link>
                        </Col>
                        <Col span={14} offset={4} className="right">
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[currentPath]}
                                mode="horizontal"
                            >
                                <Menu.Item key="/">首页</Menu.Item>
                                <SubMenu title="资金" key="/fund/list">
                                    <Menu.Item key="/fund/list/debts">债权资金</Menu.Item>
                                    <Menu.Item key="/fund/list/stock">股权资金</Menu.Item>
                                    <Menu.Item key="/fund/list/purchase">资产收购资金</Menu.Item>
                                </SubMenu>
                                <SubMenu title="项目" key="/project/list">
                                    <Menu.Item key="/project/list/debts">债权项目</Menu.Item>
                                    <Menu.Item key="/project/list/stock">股权项目</Menu.Item>
                                    <Menu.Item key="/project/list/transfer">资产转让项目</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="/entrust">委托</Menu.Item>
                                <Menu.Item key="/space">个人中心</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Header>
        )
    }
}

module.exports = bizHeader;