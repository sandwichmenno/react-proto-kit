import React from 'react';
import {alignment} from "../helper";

const Button = ({name, children, valign, halign, spacing, type, onClick}) => {
    let buttonStyle = {
        background: '#0065f2',
        border: '0',
        outline: '0',
        color: '#ffffff',
        padding: '10px 20px',
        margin: spacing,
    };

    buttonStyle = alignment({halign, valign}, buttonStyle);

    return(
        <button type={type} className={name} style={buttonStyle} onClick={onClick}>{children}</button>
    );
}

export default Button;