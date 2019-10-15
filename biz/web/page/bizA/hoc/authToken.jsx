import React from "react";
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

const authToken = (WrappedComponent) => {
    @inject("userStore")
    @observer
    @withRouter
    class CheckAuth extends React.Component {
        componentWillMount() {
            const { userStore, history } = this.props;
            if(!userStore.userInfo.token) {
                history.push("/login");
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    return CheckAuth;
}

export default authToken;
