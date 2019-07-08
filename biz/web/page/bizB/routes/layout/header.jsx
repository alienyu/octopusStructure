import * as React from 'react'
import { WrapperHeaderCmp } from './styled'
import { Button, Row, Col } from 'antd';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                <div>MPA Demo</div>
            </WrapperHeaderCmp>
        )
    }
}

