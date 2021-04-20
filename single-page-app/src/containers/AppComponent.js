import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Axios from "axios";

export default class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "MAyank",
            userAge: 32
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div style={{color: "grey", padding: "10px", border: "1px solid red"}}>
                    <h1>This is the Starting of Single Page Application....</h1>
                    <Link style={{marginRight: "10px"}} to="/">Home</Link>
                    <Link style={{marginRight: "10px"}} to="/help">Help</Link>
                    <Link style={{marginRight: "10px"}} to="/about">About</Link>
                    <Link style={{marginRight: "10px"}} to="/contact">Contact</Link><br/><br/> 
                </div>

                <div style={{height: "450px", border: "1px solid black", margin: "15px 0px", padding: "10px", overflow: "auto"}}>
                    <Route exact path="/" component={HomeComponent}></Route>
                    <Route exact path="/home" component={HomeComponent}></Route>
                    <Route exact path="/about" component={AboutComponent}></Route>
                    <Route exact path="/help" component={HelpComponent}></Route>
                    <Route exact path="/contact" component={ContactComponent}></Route>
                    <Route exact path="/details/:userid" component={DetailsComponent}></Route>
                </div>
                
                <h2 style={{color: "grey", padding: "10px", border: "1px solid red"}}>This is the footer of my Application</h2>
            </BrowserRouter>
        )
    }
}

function DetailsComponent(props) {
    var [employee, setEmployee] = useState({
        name: "",
        avatar: "",
        createdAt: "",
        id: ""
    });

    var userUrl = props.match.params.userid;

    useEffect(() => {
        debugger;
        Axios.get("http://localhost:4000/employees/" + userUrl).then((response) => {
            setEmployee(response.data)
        })
    }, []);

    function goBackFunction() {
        props.history.goBack();
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <label>User Name: {employee.name}</label><br/><br/>
            <label>User Id: {employee.id}</label><br/><br/>
            <label>User CreatedAt: {employee.createdAt}</label><br/><br/>
            <label>User Avatar: {employee.avatar}</label><br/><br/>
            <input type="button" onClick={goBackFunction} value="Go Back" />
        </div>
    )
}

function HomeComponent(props) {

    debugger;
    var [employees, setEmployees] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployees(response.data)
        })
    }, []);

    function redirectUser(userId) {
        props.history.push("/details/" + userId)
    }

    return (
        <div>
            {employees.map((employee) => {
                return (
                    <div>
                        <h1>User Name is {employee.name}</h1>
                        <input style={{marginRight: "10px"}} type="button" value="See Detials" onClick={() => redirectUser(employee.id)} />
                        <input style={{marginRight: "10px"}} type="button" value="Update Records" onClick={() => redirectUser(employee.id)} />
                        <input style={{marginRight: "10px"}} type="button" value="Detele Record" onClick={() => redirectUser(employee.id)} /><hr/>
                    </div>
                )
            })}
        </div>
    )
}

function AboutComponent() {
    return <h1>This is About Component</h1>
}

function HelpComponent() {
    return <h1>This is Help Component</h1>
}

function ContactComponent() {
    return <h1>This is Contact Component</h1>
}