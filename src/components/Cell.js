import React from 'react';
import {alignment, percentage} from "../helper";
import Config from '../config'
import useWindowDimensions from "../hooks/useWindowDimensions";

const Cell = ({name, children, xs, sm, md, lg, height, gap, background, halign, valign}) => {
    const { windowHeight, windowWidth } = useWindowDimensions();

    let cellStyle = {
        height: height,
        backgroundColor: background,
        margin: gap,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    };

    cellStyle = alignment({halign, valign}, cellStyle);

    let width;
    if (windowWidth < Config.breakpoints.xs) {
        //extra small
        width = xs || sm || md || lg;
    } else if (windowWidth < Config.breakpoints.sm) {
        //small
        width = lg || md || sm || xs;
    } else if (windowWidth < Config.breakpoints.md) {
        //medium
        width = md || sm || xs || lg;
    } else {
        //large
        width = lg || md || sm || xs;
    }

    if(width !== '1') {
        if(width === "hidden" || width == "0") {
            cellStyle.width = '0';
            cellStyle.display = 'none';
        } else {
            if (/^\d+(\.\d+)?%$/.test(width)) {
                cellStyle.width = width;
            } else {
                cellStyle.width = percentage(width);
            }
        }
    } else {
        cellStyle.width = '100%';
    }

    if (!cellStyle.width) {
        cellStyle.width = '100%';
    }

    return(
        <div className={name} style={cellStyle}>
            {children}
        </div>
    );
}

export default Cell;