import React, {useState} from 'react';
import {alignment} from "../helper";

const Dropdown = ({name, children, valign, halign, spacing, type, items, callback}) => {
    let buttonStyle = {
        background: '#D0D9E2',
        border: '0',
        outline: '0',
        color: '#1F313D',
        borderRadius: '0.3em',
        padding: '10px 20px',
        margin: spacing,
        cursor: 'pointer'
    };

    let dropdownStyle = {
        display: 'inline-block',
        position: 'relative'
    }

    let dropdownMenuStyle = {
        minWidth:'160px',
        padding: '5px 0',
        position: 'absolute',
        left: '0',
        listStyle: 'none',
        background: '#f3f5f7',
        margin: '0'
    }

    let dropdownItemStyle = {
        padding: '10px 20px',
        display: 'block',
        cursor: 'pointer'
    }

    buttonStyle = alignment({halign, valign}, buttonStyle);

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(null);

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const openDropdown = () => {
        setIsOpen(true)
    }

    const setDropdownValue = (itemValue) => {
        closeDropdown();
        setValue(value => itemValue);
        callback(value);
    }

    const renderDropdown = () => {
        if(value === null) {
            return (
                <button type={type} className={name} style={buttonStyle} onClick={isOpen ? closeDropdown : openDropdown}>{children}</button>
            );
        } else {
            return (
                <button type={type} className={name} style={buttonStyle} onClick={isOpen ? closeDropdown : openDropdown}>{value}</button>
            );
        }
    }

    const renderDropdownMenu = () => {
        if(isOpen) {
            let dropdownMenuItems = items.map(function (item, i) {
                let menuItem = (
                    <li key={'item' + i} className="item" style={dropdownItemStyle} value={item.label} onClick={() => setDropdownValue(item.label)}>
                        <a className="action">{item.label}</a>
                    </li>
                );
                return menuItem;
            });

            return (
                <ul key="menu" style={dropdownMenuStyle}>
                    {dropdownMenuItems}
                </ul>
            );
        }
    }

    return(
        <div className={name} style={dropdownStyle}>
            {renderDropdown()}
            {renderDropdownMenu()}
        </div>
    );
}

export default Dropdown;