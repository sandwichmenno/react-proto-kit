import React from 'react';
import {alignment} from "../../helper";
import styled from 'styled-components';

const Button = ({name, children, valign, halign, spacing, type, onClick}) => {
    let buttonStyle = {
        border: '0',
        outline: '0',
        color: '#ffffff',
        padding: '10px 20px',
        margin: spacing,
    };

    buttonStyle = alignment({halign, valign}, buttonStyle);

    return(
        <Button type={type} className={name} onClick={onClick} style={buttonStyle}>{children}</Button>
    );
}

export default Button;