import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/home";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App>
      <Router basename={"panel"}>
         <Route path="/" component={HomePage} />
      </Router>
    </App>
  </StrictMode>,
);
