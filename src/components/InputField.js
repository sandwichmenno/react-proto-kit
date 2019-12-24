import React from 'react';
import {alignment} from "../helper";

const InputField = ({name, children, valign, halign, spacing, type, onChange, value, placeholder}) => {
    let inputStyle = {
        background: '#ffffff',
        border: '1px solid #eef6ff',
        outline: '0',
        color: '#0065f2',
        borderRadius: '0.3em',
        padding: '10px 20px',
        margin: spacing,
    };

    inputStyle = alignment({halign, valign}, inputStyle);

    return(
        <input type={type} className={name} name={name} style={inputStyle} onChange={onChange} value={value} placeholder={placeholder}>{children}</input>
    );
}

export default InputField;