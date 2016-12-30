import AppContainer  from "./containers/AppContainer";
import {createStore} from "redux";
import {photoApp}    from "./reducers";
import {Provider}    from "react-redux";
import React         from "react";
import {render}      from "react-dom";

import "../styles/style";

let store = createStore(photoApp);

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById("root")
);