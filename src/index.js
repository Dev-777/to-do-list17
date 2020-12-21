import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "reset-css";
import { Provider } from "react-redux";
import { store } from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
