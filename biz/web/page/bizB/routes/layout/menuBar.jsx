import React,{Component} from 'react'
import { hashHistory } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import Constants from 'web-bizB-Constants';
const { menuItems } = Constants;
import { get } from 'lodash';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems,
            rootSubmenuKeys: ['bizA', 'bizB'],
            openKeys: [''],
            selectedKeys: ['']
        };
        ['onOpenChange', 'menuChange'].forEach(m=>this[m] = this[m].bind(this))
    }

    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.filter(key => this.state.openKeys.indexOf(key) === -1)[0];
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    }

    menuChange(e) {
        this.setState({selectedKeys: [e.key]});
        location.href = e.item.props.url;
    }

    componentWillMount() {
        let openKeys = [get(location.pathname.match(/web\/(\w+)/), '1')];
        let selectedKeys = [`${openKeys}-${get(location.hash.match(/#(\w+)/), '1', 'index')}`];
        this.setState({
            openKeys,
            selectedKeys
        })
    }

    render() {
        if(this.state.menuItems.length > 0) {
            return (
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    selectedKeys={this.state.selectedKeys}
                    onOpenChange={this.onOpenChange}
                    onClick={this.menuChange}
                    style={{ height: '100%', borderRight: 0 }}>
                    {
                        this.state.menuItems.map(function(item) {
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

