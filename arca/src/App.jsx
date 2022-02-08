import React from "react";
import ReactDOM from "react-dom";
import Arca from "./features/arca";
import { StoreProvider } from "store/store";

import "./index.css";

const App = () => (
  <div>
    <div>Name: arca</div>
    <Arca/>
  </div>
);
ReactDOM.render(
      <StoreProvider>
        <App />
      </StoreProvider>, document.getElementById("app"));
