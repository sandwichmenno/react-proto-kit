import React from 'react';
import {getSubStr} from "../helper";

const List = (props) => {
    let listStyle = {

    };

    let {name, children, values, valueKey, itemComponent} = props;

    let blacklistedProps = ["name", "children", "values", "item"];
    let extraProps = {...props};

    blacklistedProps.map(function(propName){
        delete extraProps[propName];
    })


    const listObject = Object.keys(values).map((keyName, i) => {
        let listItem = Object.keys(values[keyName]).map((item, i) => {
            return (
                <span className={item}>{values[keyName][item]}</span>
            );
        });

        return (
            <div className="listItem">{listItem}</div>
        );
    });

    return(
        <div className={name}>
            {listObject}
        </div>
    );
}

export default List;