import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "./features/header";
import Arca from "arca/arca";
import Envelope from "envelope/envelope";
import Home from "home/home";
import { StoreProvider } from "store/store";

import "./index.css";

const App = () => (
  <div className="">
    <Header/>
    <Routes>
         <Route path="envelope" element={<Envelope />} />
         <Route path="arca" element={<Arca />} />
         <Route path="/" element={<Home />} />
    </Routes>
 </div>
);
ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</StoreProvider>, document.getElementById("app"));
