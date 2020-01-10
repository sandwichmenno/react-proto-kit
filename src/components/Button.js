import React from 'react';
import {alignment} from "../helper";
import styled from 'styled-components';

const Button = ({name, children, valign, halign, spacing, type, onClick}) => {
    /*let buttonStyle = {
        border: '0',
        outline: '0',
        color: '#ffffff',
        padding: '10px 20px',
        margin: spacing,
    };*/

    let Button = styled.button`
        background: ${props => props.theme.main};
        border: 0;
        outline: 0;
        color: ${props => props.theme.inverted};
        padding: '10px 20px',
    `;

    /*buttonStyle = alignment({halign, valign}, buttonStyle);*/

    return(
        <Button type={type} className={name} onClick={onClick}>{children}</Button>
    );
}

export default Button;