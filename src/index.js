import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import "./i18nextConf";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
