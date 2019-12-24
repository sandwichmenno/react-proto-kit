import React from 'react';
import {alignment} from "../helper";

const TextArea = ({name, children, valign, halign, spacing, width, height, onChange}) => {
    let textareaStyle = {
        background: '#fff',
        border: '1px solid #D0D9E2',
        outline: '0',
        color: '#1F313D',
        borderRadius: '0.3em',
        padding: '10px 20px',
        margin: spacing,
        width: width,
        height: height,
    };

    textareaStyle = alignment({halign, valign}, textareaStyle);

    return(
        <textarea className={name} name={name} style={textareaStyle} onChange={onChange}>{children}</textarea>
    );
}

export default TextArea;