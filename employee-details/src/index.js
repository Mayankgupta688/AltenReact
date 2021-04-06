import React from "react";
import ReactDOM from "react-dom";
import StylingComponent from "./components/StylingComponent";


debugger;

ReactDOM.render((
  <div>
    <StylingComponent headerOneColor="yellow" headerTwoColor="brown" headerThreeColor="grey"></StylingComponent><hr/>
    <StylingComponent headerOneColor="blue" headerTwoColor="green" headerThreeColor="aqua"></StylingComponent>
  </div>
), document.getElementById("root"));
