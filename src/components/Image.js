import React from 'react';
import {alignment} from "../helper";

const Image = ({name, children, src, width, height, spacing, alt, valign, halign, circle}) => {
    let imageStyle = {
        width: width,
        height: height,
        margin: spacing,
    };

    imageStyle = alignment({halign, valign}, imageStyle);

    if(circle) {
        imageStyle.borderRadius = '50%';
    }

    if(src) {
        return(
            <img src={src} alt={alt} style={imageStyle} />
        );
    } else {
        imageStyle.background="repeating-linear-gradient( -45deg, #eef6ff, #eef6ff 30px, #d6e7ff 30px, #d6e7ff 32px)";
        imageStyle.border = "1px solid #ffffff";

        return(
            <div style={imageStyle}></div>
        );
    }
}

export default Image;