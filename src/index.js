import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "reset-css";
import { Provider } from "react-redux";
import store from "./store/Store";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom"
import ApproveSignUp from "./pages/signUp/approveSignUp/ApproveSignUp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Route path="/app" component={App}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/approvesignup" component={ApproveSignUp}/>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
