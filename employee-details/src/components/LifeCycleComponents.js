import React from "react";

export default class LifeCycleComponents extends React.Component {
    constructor() {
        debugger;
        super();
        this.reRenderCount = 0;
        this.state = {
            counter: 0,
            reRenderCount: 0
        } 
    }

    componentDidMount() {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidUpdate = () => {
        debugger;

        if(this.state.reRenderCount === 0) {
            this.setState({
                reRenderCount: this.state.reRenderCount + 1
            })
        }
        
    }

    render() {
        debugger;
        return <h1>Counter Value is: {this.state.counter} {this.state.reRenderCount}</h1>
    }
}
