import React,{Component} from 'react'

class Second extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2>{JSON.stringify(this.props.match)}</h2>
    }
}

module.exports = Second;
        