import * as React from 'react'
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { WrapperHeaderCmp } from './styled'
import { Popconfirm, Row, Col, Select } from 'antd';
const { Option } = Select;
import Constants from 'webConstants';
const { supportedLang } = Constants;

declare var intl: any;

type props = {
    userStore? : any,
    langStore? : any,
    history: any
}

@inject('userStore', 'langStore')
@observer
class Header extends React.Component<props, {}> {
    constructor(props: any) {
        super(props);
    }

    logout() {
        this.props.userStore.clearUserInfo();
        this.props.history.push('/login');
    }

    changeLang(val: string) {
        this.props.langStore.changeLang(val);
    }

    render() {
        const { userStore, langStore } = this.props;
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

export default withRouter(Header);
