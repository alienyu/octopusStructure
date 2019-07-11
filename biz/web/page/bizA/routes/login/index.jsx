import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import { observer } from 'mobx-react';
import { WrapperLoginCmp } from './styled';
import userInfoStore from 'web-mobx/userInfo';
import loadingStore from 'web-mobx/loadingMask';

@observer
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                webAjax({
                    url: "/login",
                    data: values,
                    callback(data) {
                        userInfoStore.changeUserInfo(Object.assign(data, values));
                    }
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <WrapperLoginCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    {userInfoStore.userInfo.token ?
                        <Row>{intl.get('login.loginStatusText')}</Row> :
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: intl.get('login.form.valid.userName.empty') }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" disabled={loadingStore.status}>{loadingStore.status ? intl.get('login.button.logging') : intl.get('login.button.login')}</Button>
                            </Form.Item>
                        </Form>
                    }
                </Row>
            </WrapperLoginCmp>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;