import React from "react";
import ReactDOM from "react-dom";
import Envelope from "./features/envelope";
import { StoreProvider } from "store/store";

import "./index.css";

const App = () => (
  <div>
    <div>Name: envelope</div>
    <Envelope/>
  </div>
);
ReactDOM.render(
    <StoreProvider>
      <App />
    </StoreProvider>, document.getElementById("app"));
