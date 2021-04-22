import axios from "axios";
import React from "react";
import * as actions from "../actions/employeesAction";

import { connect } from "react-redux"; 

class AppComponent extends React.Component {

    componentDidMount() {
        debugger;
        axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.props.addEmployeesToStore(response.data)
        })
    }

    deleteAllEmployees = () => {
        this.props.deleteEmployeesFromStore()
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The List Of Employees is Given Below:</h1>
                <input type="button" value="Delete All" onClick={this.deleteAllEmployees} /><hr/><hr/>
                
                {this.props.employees.map((employee) => {
                    return (
                        <div>
                            <h1>Employee Name: {employee.name}</h1><hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        employees: store.employees,
        flights: store.flights
    }
}

export default connect(mapStateToProps, actions)(AppComponent);

