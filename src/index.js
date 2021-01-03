import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "reset-css";
import { Provider } from "react-redux";
import store from './store/Store'
import SignUp from "./pages/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <SignUp /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
