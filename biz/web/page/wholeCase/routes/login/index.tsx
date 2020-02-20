import * as React from "react";
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { observer, inject } from 'mobx-react';
import { WrapperLoginCmp } from './styled';

interface NormalLoginFormProps extends FormComponentProps {
    userStore: any,
    ajaxLoadingStore: any,
    form: any,
    history: any
}

@inject("userStore", "ajaxLoadingStore")
@observer
class NormalLoginForm extends React.Component<NormalLoginFormProps, {}> {
    handleSubmit = (e:any) => {
        e.preventDefault();
        const { userStore } = this.props;
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                ajax({
                    url: "/login",
                    data: values,
                    callback(data: any) {
                        userStore.changeUserInfo(Object.assign(data, values));
                    }
                })
            }
        });
    };

    render() {
        const { userStore, ajaxLoadingStore } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <WrapperLoginCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    {userStore.userInfo.token ?
                        <Row><Row>{intl.get('login.loginStatusText')}</Row><Button type="primary" onClick={() => this.props.history.push("/layoutPage")} className="login-form-button">去layoutPage(未登录进不去)</Button></Row> :
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: intl.get('login.form.valid.userName.empty') }],
                                })(
                                    <Input
                                        prefix={<Icon type="exclamation-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" disabled={ajaxLoadingStore.status}>{ajaxLoadingStore.status ? intl.get('login.button.logging') : intl.get('login.button.login')}</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={() => this.props.history.push("/layoutPage")} className="login-form-button">去layoutPage(未登录进不去)</Button>
                            </Form.Item>
                        </Form>
                    }
                </Row>
            </WrapperLoginCmp>
        )
    }
}

const WrappedNormalLoginForm = Form.create<NormalLoginFormProps>()(NormalLoginForm);
export default WrappedNormalLoginForm;