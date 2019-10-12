import * as React from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { WrapperHeaderCmp } from './styled'
import { Popconfirm, Row, Col, Select } from 'antd';
const { Option } = Select;
import userStore from 'web-mobx/userInfo';
import langStore from 'web-mobx/lang';
import Constants from 'web-Constants';
const { supportedLang } = Constants;

@observer
@withRouter
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    logout() {
        userStore.clearUserInfo();
        this.props.history.push('/login');
    }

    changeLang(val) {
        langStore.changeLang(val);
    }

    render() {
        console.log("userName",userStore.userInfo.userName)
        return (
            <WrapperHeaderCmp>
                <Row type="flex" justify="center">
                    <Col span={5}>{intl.get('layout.header.title')}</Col>
                    <Col span={5} offset={8} className="userName">
                        <Popconfirm
                            title="logout"
                            onConfirm={this.logout.bind(this)}
                            okText="Yes"
                            cancelText="No"
                        >{userStore.userInfo.userName}</Popconfirm>
                    </Col>
                    <Col span={3} offset={2}>
                        <Select 
                            defaultValue={langStore.currentLang}
                            onChange={this.changeLang.bind(this)}
                        >
                            {supportedLang.map((lang, index) =>
                                <Option key={index} value={lang.value}>{lang.name}</Option>
                            )}
                        </Select>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}

