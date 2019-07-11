import * as React from 'react'
import { observer } from 'mobx-react';
import { WrapperHeaderCmp } from './styled'
import { Popconfirm, Row, Col } from 'antd';
import userStore from 'web-mobx/userInfo';

@observer
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    logout() {
        userStore.clearUserInfo();
        location.hash = "login";
    }

    render() {
        return (
            <WrapperHeaderCmp>
                <Row type="flex" justify="center">
                    <Col span={5}>MPA demo</Col>
                    <Col span={5} offset={10} className="userName">
                        <Popconfirm
                            title="logout"
                            onConfirm={this.logout.bind(this)}
                            okText="Yes"
                            cancelText="No"
                        >{userStore.userInfo.userName}</Popconfirm>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}

