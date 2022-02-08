import React from 'react';
import './style.css';

const MfeAvatar =  (props) => {
    //const style = props.className ? props.className : "default-avatar-style";

    return (
        <div className={props.className}>
            <div className="default-avatar-style">
                <span className="default-avatar-span">{props.text}</span>
            </div>
        </div>
    );
}

export default MfeAvatar;