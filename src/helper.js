export function percentage(fraction) {
    let bits = fraction.split("/");
    return parseInt(bits[0],10)/parseInt(bits[1],10)*100 + "%";
}

export function alignment({valign, halign}, style) {
    switch(valign) {
        case 'center':
            style.alignSelf = 'center';
            break;
        case 'top':
            style.alignSelf = 'flex-start';
            break;
        case 'bottom':
            style.alignSelf = 'flex-end';
            break;
    }

    switch(halign) {
        case 'center':
            style.marginRight = 'auto';
            style.marginLeft = 'auto';
            break;
        case 'left':
            style.marginRight = 'auto';
            break;
        case 'right':
            style.marginLeft = 'auto';
            break;
    }

    return style;
}

export function getSubStr(str, delim) {
    var a = str.indexOf(delim);

    if (a == -1)
        return '';

    var b = str.indexOf(delim, a+1);

    if (b == -1)
        return '';

    return str.substr(a+1, b-a-1);
    //                 ^    ^- length = gap between delimiters
    //                 |- start = just after the first delimiter
}