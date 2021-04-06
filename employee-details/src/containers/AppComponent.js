import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContentComponent from "../components/ContentComponent";

export default function AppComponent(props) {
    debugger;
    return (
        <div>
            <HeaderComponent userName={props.userName + " Gupta"}></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}