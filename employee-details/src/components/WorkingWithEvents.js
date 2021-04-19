import React, {Component} from "react";

export default class WorkingWithEvents extends Component {
    constructor() {
        debugger;
        super();

        this.userInfo = 10;
        this.state = {
            counter: 0,
            name: "Mayank"
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        console.log(this.state.counter);
        if(nextState.name  === "Anshul") {
            return true
        }

        return false;
    }

    clickToUpdate = () => {
        debugger;
        this.setState({
            counter: this.state.counter + 1,
            name: "Ankit"
        })

        console.log(this.state.counter)
    }

    clickForUpdateToHigherValue = () => {
        this.setState({
            counter: 10000,
            name: "Anshul"
        })

        console.log(this.state.counter)
    }

    clickToUpdateInfo = () => {
        this.userInfo = "1000";
        console.log(this.userInfo);
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter} {this.state.name}</h1>
                <h2>User Info is {this.userInfo}</h2>
                <input type="button" onClick={this.clickToUpdate} value="Click to Update Counter" />
                <input type="button" onClick={this.clickToUpdateInfo} value="Click to Update Info" />
                <h2 onMouseOver={this.clickForUpdateToHigherValue} style={{"border": "1px solid red", padding: "10px"}}>Hover over this are to Update Data</h2>
            </div>
        )
    }
}