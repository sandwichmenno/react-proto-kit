import React, {useState} from 'react';

const FormField = ({name, children, width, label, forName}) => {
    let formFieldStyle = {
        width: width,
    };

    return(
        <React.Fragment>
            <label className="Label" htmlFor={forName}>
                {label}
            </label>
            {children}
        </React.Fragment>
    );
}

export default FormField;