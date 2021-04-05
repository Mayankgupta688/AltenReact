import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";

ReactDOM.render((
  <div>
    <HeaderComponent userName="Mayank Gupta"></HeaderComponent>
    <HeaderComponent userName="Anshul Gupta"></HeaderComponent>
    <HeaderComponent userName="Aniket Gupta"></HeaderComponent>
    <ContentComponent></ContentComponent>
    <FooterComponent></FooterComponent>
  </div>
) , document.getElementById("root"));
