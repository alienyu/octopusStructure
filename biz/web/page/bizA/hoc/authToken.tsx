import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { withRouter } from 'react-router-dom';

type props = {
    userStore: any,
    history: any
}

const authToken = (WrappedComponent: any) => {
    @inject("userStore")
    @observer
    class CheckAuth extends React.Component<props, {}> {
        constructor(props: any) {
            super(props);
        }

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

    return withRouter(CheckAuth);
}

export default authToken;
