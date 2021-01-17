import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { SignUp } from "./pages/signUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Approve } from "./pages/approve";
import TestApi from "./Tests/TestApi";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signIn";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/app" component={App} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/approve" component={Approve} />
        <Route exact path="/test" component={TestApi} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signIn" component={SignIn} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
