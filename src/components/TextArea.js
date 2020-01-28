import React from 'react';
import {alignment} from "../helper";

const TextArea = ({name, children, valign, halign, spacing, background, border, color, padding, width, height, onChange}) => {
    let textareaStyle = {
        background: background,
        border: border,
        outline: '0',
        color: color,
        borderRadius: '0.3em',
        padding: padding,
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