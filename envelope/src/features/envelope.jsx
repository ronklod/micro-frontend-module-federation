import React, {useState} from 'react';
import './envelope.css';
import {MfeButton, MfeText} from "mfe-poc-component-library";
import {useStore} from "store/store";


export default () => {

     const [amount, setAmount] = useState(0);
     const {count, increment, subtract} = useStore();

    const addAmount = (e) =>{
       if(Number.isInteger(parseInt(e.target.value))){
            setAmount(parseInt(e.target.value));
        }
    }

    const incrementByAmount = () =>{
        increment(amount);
    }

    return (
        <div className="envelope-body">
            <div className="page-title">
                Envelope
            </div>

            <div className="section-0">
                <p className="section-0-description">
                    This example demonstrates how the state of the application is shared between all the different micro frontends
                    <br></br>
                    and the use of shared component library (buttons, textbox)
                </p>
                <span>{count}</span>
            </div>
            <div className="section-1" >
                <div className="div-btn-left">
                    <MfeButton text="+"  onClick={() => increment(1)}/>
                </div>
                <div className="div-btn-right">
                    <MfeButton text="-"  onClick={() => subtract(1) }/>
                </div>
                
            </div>
            <div className="section-2">
                <div style={{'marginTop':'10px', 'margin-bottom': '10px'}}>Increment By:</div>
                <div>
                    <div style={{'marginRight': '10px', 'display': 'inline-block'}}>
                        <MfeText  onChange={addAmount} />
                    </div>
                    <div style={{'marginRight': '10px', 'display': 'inline-block'}} >
                        <MfeButton text="Add Amout"  onClick={incrementByAmount}/>
                    </div>
                </div>
            </div>

        </div>

    );
}