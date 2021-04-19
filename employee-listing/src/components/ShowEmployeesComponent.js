import React from "react";
import Axios from "axios";

export default class ShowEmployeesComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            filterList: [],
            userName: "Mayank",
            userId: "100"
        }
    }

    returnTemplate(employee) {
        if(employee.name.length >= 0) {
            return (
                <div>
                    { employee.name.length >= 0 && (
                        <div>
                            <h1>Employee Name: {employee.name}</h1><hr/>
                        </div>
                    )}
                </div>
            )
        } else {
            return null;
        }   
    }

    addEmployee = () => {
        debugger;
        Axios.get("http://localhost:8000/employees").then((response) => {
            this.setState({
                employeeList: response.data,
                filterList: response.data
            })
        })
    }

    getUpdatedValue = (event) => {
        debugger;
        var filterData = event.target.value;

        this.setState({
            filterList: this.state.employeeList.filter((employee) => {
                return employee.name.indexOf(filterData) > -1;
            })
        })
    }

    deleteEmployee = (userId) => {
        debugger;
        Axios.delete("http://localhost:8000/employees/" + userId).then((response) => {
            Axios.get("http://localhost:8000/employees").then((response) => {
                this.setState({
                    employeeList: response.data,
                    filterList: response.data
                })
            })
        })
    }

    submitData = () => {
        debugger;
        Axios.post("http://localhost:8000/employees", {
            id: this.state.userId,
            name: this.state.userName,
            createdAt: "Now",
            avatar: "Sample"
        }).then((response) => {
            Axios.get("http://localhost:8000/employees").then((response) => {
                this.setState({
                    employeeList: response.data,
                    filterList: response.data
                })
            })
        })
    }

    updateCode = (event) => {
        debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Add Employee To The List</h1>
                <label>Enter Name</label><input type="text" value={this.state.userName} name="userName" onChange={this.updateCode} placeholder="Enter Name" /><br/><br/>
                <label>Enter Id</label><input type="text" value={this.state.userId} name="userId" onChange={this.updateCode} placeholder="Enter Id" /><br/><br/>
                <input type="button" value="Submit" onClick={() => this.submitData()} />
                <hr/>


                {this.state.employeeList.length > 0 && (
                    <div>
                        <b>Filter Data: </b><input type="text" onChange={this.getUpdatedValue} />
                        <h1>The List of Employee is Given Below: </h1><hr/>
                        { this.state.filterList.map((employee) => {
                            return (
                                <div>
                                    { employee.name.length >= 0 && (
                                        <div>
                                            <h1>Employee Name: {employee.name}</h1>
                                            <h2>Employee Id: {employee.id}</h2>
                                            <input type="button" onClick={() => this.deleteEmployee(employee.id)} value="Delete" />
                                            <hr/>
                                        </div>
                                    )}
                                </div>
                            )
                        }) }
                    </div>
                )}

                {this.state.employeeList.length === 0 && (
                    <h1>No Employee in the Database...</h1>
                )}    

                <input type="button" onClick={this.addEmployee} value="Get Employee" />
            </div>
        )
    }
}