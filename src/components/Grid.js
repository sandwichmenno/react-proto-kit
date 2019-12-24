import React from 'react';

const Grid = ({name, children, gap, background}) => {
    let gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: gap,
        alignItems: 'flex-start',
        background: background
    };

    return(
        <section className={name} style={gridStyle}>
            {children}
        </section>
    );
}

export default Grid;