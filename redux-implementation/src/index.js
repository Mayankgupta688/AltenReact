import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import LengthComponent from "./components/LengthComponent";
import AppComponent from "./components/AppComponent";
import rootReducer from "./reducers/index";

var applicationStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={applicationStore}>
        <LengthComponent></LengthComponent>
        <AppComponent></AppComponent>
    </Provider>
), document.getElementById("root"))