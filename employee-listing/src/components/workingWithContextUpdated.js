import React, { useState } from "react";
const StorageData = React.createContext({});

export default function GrandParent() {
    var [userData, setUserData] = useState({
        userVillage: "Delhi",
        userLanguage: "Hindi"
    })

    function updateUserData(data) {
        setUserData(data)
    }

    return (
        <StorageData.Provider value={{userData: userData, updateUserData: updateUserData}}>
            <h1>Village Name from Grand Parent: {userData.userVillage}</h1>
            <h2>Language from Grand Parent: {userData.userLanguage}</h2><hr/>
            <Parents></Parents>
        </StorageData.Provider>
    )
}


function Parents() {
    return (
        <div>
            <h1>This is Sample Parent Not Dispklaying Data</h1><hr/>
            <Children></Children>
        </div>
    )
}


function Children() {
    return (
        <div>
            <h1>This is Sample Children Not Dispklaying Data</h1><hr/>
            <GrandChildren></GrandChildren>
        </div>
    )
}

function GrandChildren() {
    debugger
    return (
        <StorageData.Consumer>
            {(context) => {
                return (
                    <div>
                        <h1>Village Name from Grand Children: {context.userData.userVillage}</h1>
                        <h2>Language from Grand Children: {context.userData.userLanguage}</h2>
                        <input type="button" value="Update Data" onClick={() => {
                            context.updateUserData({
                                userVillage: "Haryana",
                                userLanguage: "Haryanavi"
                            })}} />
                        <hr/>
                    </div>
                )   
            }}
        </StorageData.Consumer>
        
    )
}