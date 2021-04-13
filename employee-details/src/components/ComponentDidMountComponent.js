import React, {Component} from "react";

export default class ComponentDidMountComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.setState({
            counter: 2000
        })
    }

    render() {
        return <h1>The Counter Value is: {this.state.counter}</h1>
    }
}