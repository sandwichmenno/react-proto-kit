import React from 'react';
import {alignment} from "../helper";
import { loremIpsum } from "lorem-ipsum";

const Text = ({name, children, type, valign, halign, spacing, sentences, textalign, link}) => {
    let textStyle = {
        padding: spacing,
        textAlign: textalign,
        color: '#0065f2',
    };

    switch(type) {
        case 'h1':
            textStyle.fontSize = '3em';
            textStyle.fontWeight = '500';
            break;
        case 'h2':
            textStyle.fontSize = '2em';
            textStyle.fontWeight = '500';
            break;
        case 'h3':
            textStyle.fontSize = '1.25em';
            textStyle.fontWeight = '500';
            break;
        case 'label':
            textStyle.fontSize = '0.8em';
            break;
        case 'bold':
            textStyle.fontSize = '1em';
            textStyle.fontWeight = '500';
            break;
    }

    let placeholderText;

    if(sentences) {
        placeholderText = loremIpsum({units: "sentences", count: parseInt(sentences)});
    }

    textStyle = alignment({halign, valign}, textStyle);

    if(type != "link") {
        return(
            <span className={name} style={textStyle}>{children} {placeholderText}</span>
        );
    } else {
        textStyle.display = 'block';
        return(
            <a href={link} className={name} style={textStyle}>{children} {placeholderText}</a>
        );
    }
}

export default Text;