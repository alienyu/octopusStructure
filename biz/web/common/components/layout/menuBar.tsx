import * as React from 'react'
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import Constants from 'webConstants';
const { menuItems } = Constants;
import { get } from 'lodash';

type props = {
    history?: any
}

type states = {
    menuItems: any,
    rootSubmenuKeys: Array<string>,
    openKeys: Array<string>,
    selectedKeys: Array<string>
}


declare global {
    interface Window {
        dc: DC;
    }
}

interface DC {
    pg: string
}

@(withRouter as any)
export default class MenuBar extends React.Component<props, states> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuItems,
            rootSubmenuKeys: ['bizA', 'bizB', 'bizC'],
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
        //跨页面跳转
        if(!e.item.props.eventKey.match(window.dc.pg)) {
            location.href = e.item.props['data-wholeurl'];
        } else {
            //单页路由跳转
            this.props.history.push(e.item.props['data-url']);
        }
    }

    componentWillMount() {
        let openKeys = [get(location.pathname.match(/web\/(\w+)/), '1')];
        let regText = new RegExp(`web\/${openKeys}\/(\\w+)`);
        let selectedKeys = [`${openKeys}-${get(location.pathname.match(regText), '1', 'index')}`];
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
                                                return <SubMenu key={item.key+ '-' + secondItem.key} title={secondItem.name}>
                                                    {
                                                        secondItem.children.map(function(thirdItem) {
                                                            return <Menu.Item key={item.key+ '-' + secondItem.key + '-' + thirdItem.key} data-wholeurl={thirdItem.wholeUrl} data-url={thirdItem.url}>{thirdItem.name}</Menu.Item>
                                                        })
                                                    }
                                                </SubMenu>
                                            } else {
                                                return <Menu.Item key={item.key+ '-' + secondItem.key} data-url={secondItem.url} data-wholeurl={secondItem.wholeUrl}>{secondItem.name}</Menu.Item>
                                            }
                                        })
                                    }
                                </SubMenu>
                            } else {
                                return <Menu.Item key={item.key} data-url={item.url} data-wholeurl={item.wholeUrl}>{item.name}</Menu.Item>
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

