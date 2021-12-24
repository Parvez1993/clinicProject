import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UseProvider } from "./contextapi";
import { UserProvider } from "./contextApi/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <UseProvider>
        <App></App>
      </UseProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
