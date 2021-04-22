
import React from "react";
import * as actions from "../actions/employeesAction";

import { connect } from "react-redux"; 

class LengthComponent extends React.Component {

    render() {
        debugger;
        return (
            <h1>Employee Length is {this.props.employees.length}</h1>
        )
    }
}

function mapStateToProps(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapStateToProps, actions)(LengthComponent);

