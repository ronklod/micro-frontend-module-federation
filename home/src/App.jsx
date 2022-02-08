import React from "react";
import ReactDOM from "react-dom";
import Home from './features/home'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: home</div>
    <Home/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
