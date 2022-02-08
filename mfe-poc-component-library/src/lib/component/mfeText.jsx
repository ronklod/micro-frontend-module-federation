import React from 'react';
import './style.css';

const MfeText = (props) => {
    const style = props.className ? props.className : "default-text-style";

    return (
        <input onChange={props.onChange} type="text" className={style} ></input>
    );
}

export default MfeText;