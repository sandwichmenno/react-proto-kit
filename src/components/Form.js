import React, {useState} from 'react';

const Form = ({name, children, onSubmit, width}) => {
    let formStyle = {
        width: width,
    };

    return(
        <form className={name} style={formStyle} onSubmit={onSubmit}>{children}</form>
    );
}

export default Form;