import React from 'react';
import {alignment} from "../helper";

const InputField = ({name, children, valign, halign, spacing, type, background, border, color, padding, onChange, value, placeholder}) => {
    let inputStyle = {
        background: background,
        border: border,
        outline: '0',
        color: color,
        borderRadius: '0.3em',
        padding: padding,
        margin: spacing,
    };

    inputStyle = alignment({halign, valign}, inputStyle);

    return(
        <input type={type} className={name} name={name} style={inputStyle} onChange={onChange} value={value} placeholder={placeholder}>{children}</input>
    );
}

export default InputField;