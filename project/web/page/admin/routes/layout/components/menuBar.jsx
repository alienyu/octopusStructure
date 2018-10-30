import React,{Component} from 'react'
import { hashHistory } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;


export class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: {},
            rootSubmenuKeys: ['auth', 'user', 'fund', 'project', 'delegateFund', 'delegateProject', 'report', 'notice', 'adv', 'activity', 'platform', 'help', 'finance', 'link'],
            openKeys: ['']
        };
        ['onOpenChange', 'menuChange', 'filterSubMenuKeys'].forEach(m=>this[m] = this[m].bind(this))
    }

    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.filter(key => this.state.openKeys.indexOf(key) === -1)[0];
        console.log(latestOpenKey)
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    }

    menuChange(e) {
        hashHistory.push(e.item.props.url);
    }

    filterSubMenuKeys(data) {
        let arr = [];
        data.map(function(item, index) {
            arr.push(item.key);
        })
        return arr;
    }

    componentWillMount() {
        let that = this;
        let currentOpenKeys = this.props.location.pathname.split("/")[1];
        webAdminAjax({
            url: "/getMenuItems",
            method: "post",
            data: {},
            callback: function(data) {
                that.setState({
                    menuData: data.menuItems,
                    rootSubmenuKeys: that.filterSubMenuKeys(data.menuItems)
                })
            }
        });
    }

    render() {
        if(this.state.menuData.length > 0) {
            return (
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    onClick={this.menuChange}
                    defaultSelectedKeys={['']}
                    defaultOpenKeys={['']}
                    style={{ height: '100%', borderRight: 0 }}>
                    {
                        this.state.menuData.map(function(item) {
                            if(item.children && item.children.length > 0) {
                                return <SubMenu key={item.key} title={item.name}>
                                    {
                                        item.children.map(function(secondItem) {
                                            if(secondItem.children && secondItem.children.length > 0) {
                                                return <SubMenu key={secondItem.key} title={secondItem.name}>
                                                    {
                                                        secondItem.children.map(function(thirdItem) {
                                                            return <Menu.Item key={thirdItem.key} url={thirdItem.url}>{thirdItem.name}</Menu.Item>
                                                        })
                                                    }
                                                </SubMenu>
                                            } else {
                                                return <Menu.Item key={secondItem.key} url={secondItem.url}>{secondItem.name}</Menu.Item>
                                            }
                                        })
                                    }
                                </SubMenu>
                            } else {
                                return <Menu.Item key={item.key} url={item.url}>{item.name}</Menu.Item>
                            }
                        })
                    }
                </Menu>
            )
        } else {
            return <div></div>
        }
    }
}

module.exports = MenuBar;