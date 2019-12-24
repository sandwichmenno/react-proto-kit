import React, {useState} from 'react';

const Checkbox = ({name, children, width, label}) => {
    let formFieldStyle = {
        width: width,
    };

    return(
        <React.Fragment>
            <input type="checkbox" className={name} />
            <span className="label">{label}</span>
        </React.Fragment>
    );
}

export default Checkbox;