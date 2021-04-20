import React, { useState } from "react";

export default function GrandParent() {
    var [userData] = useState({
        userVillage: "Delhi",
        userLanguage: "Hindi"
    })

    return (
        <div>
            <h1>Village Name from Grand Parent: {userData.userVillage}</h1>
            <h2>Language from Grand Parent: {userData.userLanguage}</h2><hr/>
            <Parents userData={userData}></Parents>
        </div>
    )
}


function Parents(props) {
    return (
        <div>
            <h1>This is Sample Parent Not Dispklaying Data</h1><hr/>
            <Children userData={props.userData}></Children>
        </div>
    )
}


function Children(props) {
    return (
        <div>
            <h1>This is Sample Children Not Dispklaying Data</h1><hr/>
            <GrandChildren userData={props.userData}></GrandChildren>
        </div>
    )
}

function GrandChildren(props) {
    return (
        <div>
            <h1>Village Name from Grand Children: {props.userData.userVillage}</h1>
            <h2>Language from Grand Children: {props.userData.userLanguage}</h2><hr/>
        </div>
    )
}