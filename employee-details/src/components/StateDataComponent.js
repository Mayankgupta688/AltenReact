import React from "react";

export default class StateDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.designation = "Developer";
        this.state = {
            counter: 0
        }

        debugger;

        setInterval(() => {
            this.designation = "Manager";
            this.forceUpdate();
        }, 1000);
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter} from {this.props.userName}</h1>
                <h2>My Designation is {this.designation}</h2>
            </div>
        )
    }
}