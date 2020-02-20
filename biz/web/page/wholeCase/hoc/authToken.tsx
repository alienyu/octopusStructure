import * as React from "react";
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

type props = {
    userStore: any,
    history: any
}

const authToken = (WrappedComponent: any) => {
    @inject("userStore")
    @observer
    @(withRouter as any)
    class CheckAuth extends React.Component<props, {}> {
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
