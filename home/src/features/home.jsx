import React from 'react';
import "./home.css";

export default () => {
    return (
        <div className="home-body">
            <div className="page-title">Home</div>
            <div className="div-content">
                Welcome to Micro Frontend POC demo.
                <br></br>
                This demo is using webpack module federation for creating micro frontends.<br></br>
                <p>
                    <span className="links-title">Some usefull links:</span>
                    <ul className="ul-links">
                        <li><a href="https://www.youtube.com/watch?v=njXeMeAu4Sg" target="_blank">https://www.youtube.com/watch?v=njXeMeAu4Sg</a></li>
                        <li><a href="https://www.youtube.com/watch?v=s_Fs4AXsTnA&t=75s">https://www.youtube.com/watch?v=s_Fs4AXsTnA&t=75s</a></li>
                        <li><a href="https://www.npmjs.com/package/create-mf-app" target="_blank">https://www.npmjs.com/package/create-mf-app</a></li>
                        <li><a href="https://www.youtube.com/watch?v=MU8_LP8R_ZI" target="_blank">Module Federation Into Production</a></li>
                    </ul>
                </p>
            </div>
        </div>

    );
}
