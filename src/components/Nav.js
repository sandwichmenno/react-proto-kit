import React, {useState} from 'react';
import {alignment} from "../helper";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Config from "../config";

const Nav = ({name, children, items, halign, valign, spacing, width}) => {
    const { windowHeight, windowWidth } = useWindowDimensions();
    const [showMenu, setShowMenu] = useState(false);

    let navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: width,
        margin: spacing,
    };

    let itemStyle = {

    }

    let hamburgerStyle = {
        width:"35px",
        height:"5px",
        background:"black",
        margin: "6px 0",
    }

    let closeStyle = {
        position: "absolute",
        right: "16px",
        top: "16px",
        width: "32px",
        height: "32px"
    }

    navStyle = alignment({halign, valign}, navStyle);

    if (windowWidth < Config.breakpoints.sm) {
        navStyle = {
            position: 'fixed',
            background: 'red',
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
        }

        itemStyle = {

        }

        if(showMenu) {
            navStyle.display = "flex";
        } else {
            navStyle.display = 'none';
        }

        return(
            <React.Fragment>
                <div className='HamburgerIcon' onClick={() => setShowMenu(true)}>
                    <div style={hamburgerStyle}></div>
                    <div style={hamburgerStyle}></div>
                    <div style={hamburgerStyle}></div>
                </div>

                <div className='MenuHolder' style={navStyle}>
                    <div className='CloseIcon' style={closeStyle} onClick={() => setShowMenu(false)}>X</div>
                    <div className="ItemHolder">
                        {items.map(function(item, index){
                            return <a key={index} href={item.src} style={itemStyle}>{item.label}</a>;
                        })}
                        {children}
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return(
            <div className={name} style={navStyle}>
                {items.map(function(item, index){
                    return <a key={index} href={item.src}>{item.label}</a>;
                })}
                {children}
            </div>
        );
    }
}

export default Nav;