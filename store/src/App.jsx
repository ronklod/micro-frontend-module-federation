import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider, useStore} from "./store";
import "./index.css";

//

const App = () => {
  const {count, increment,subtract} = useStore();
  return(
        <div className="container">
        <div>Name: store</div>
        <button onClick={increment}>Add</button>
        <div>
          Count: {count}
        </div>
        <button onClick={()=>{subtract(2)}}>Subtract</button>
      </div>
      )
  
  };




ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>, document.getElementById("app"));
