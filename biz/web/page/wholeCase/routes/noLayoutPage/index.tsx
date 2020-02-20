import * as React from 'react';
import Other from '../other';

export default class NoLayoutPage extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Other type="0"/>
        );
    }
}