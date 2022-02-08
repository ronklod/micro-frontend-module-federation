import React from 'react';
import { Link} from "react-router-dom";
import {MfeAvatar} from "mfe-poc-component-library";
import {useStore} from "store/store";

export default () => {

    const {count, increment} = useStore();

    return (
        <div className="seebo-nav-header">
            <nav className="seebo-nav">
                <h2 className="nav-title">Micro-frontend Demo</h2>
                <Link to="/">Home</Link> |{" "}
                <Link to="/envelope">Envelope</Link> |{" "}
                <Link to="/arca">ARCA</Link>
            </nav>
            <div className="counter-div">
                #
                {count}
            </div>
            <div className="avatar-style">              
                <MfeAvatar text="RK" />
            </div>
        </div>

    );
}