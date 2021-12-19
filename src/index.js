import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UseProvider } from "./contextapi";

ReactDOM.render(
  <React.StrictMode>
    <UseProvider>
      <App></App>
    </UseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
