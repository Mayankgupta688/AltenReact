import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function ClickComponent() {

    // useEffect(() => {
    //     Axios.get("http://localhost:8000/employees").then((response) => {
    //         setUserDetails(response.data);
    //     })
    // }, []);

    var [counter, setCounter] = useState(0);
    var [userDetails, setUserDetails] = useState([]);

    function updateCounter() {
        setCounter(counter + 1);
    }

    function getUpdatedData() {
        Axios.get("http://localhost:8000/employees").then((response) => {
            setUserDetails(response.data)
        })
    }

    function deleteEmployee(userId) {
        Axios.delete("http://localhost:8000/employees/" + userId).then((response) => {
            Axios.get("http://localhost:8000/employees").then((response) => {
                setUserDetails(response.data)
            })
        })
    }

    return (
        <div>
            <input type="button" onClick={getUpdatedData} value="Update Data" /><br/><br/>

            {userDetails.length > 0 && (
                <div>
                    <b>Filter Data: </b><input type="text"  />
                    <h1>The List of Employee is Given Below: </h1><hr/>
                    { userDetails.map((employee) => {
                        return (
                            <div>
                                <h1>Employee Name: {employee.name}</h1>
                                <h2>Employee Id: {employee.id}</h2>
                                <input type="button" value="Delete" onClick={() => deleteEmployee(employee.id)} />
                                <hr/>
                            </div>
                        )
                    }) }
                </div>
            )}
        </div>
    )
}