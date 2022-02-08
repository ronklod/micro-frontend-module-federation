import React from 'react';
import './style.css';

const MfeButton =  (props) => {
    const style = props.className ? props.className : "default-btn-style";
    const text = props.text? props.text : "Click me";

    return (
        <button className={style} onClick={props.onClick}>{text}</button>
    );
}

export default MfeButton;