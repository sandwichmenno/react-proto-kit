import React from 'react';
import { withKnobs, color, text, select, number, object } from "@storybook/addon-knobs";

import Image from "../../components/Image";
import Text from "../../components/Text";
import {withInfo} from "@storybook/addon-info";

export default {
    title: 'Elements',
    decorators: [withInfo, withKnobs]
};

export const image = () => {
    return <Image
        name={text('Name', '')}
        src={text('Source', 'https://www.hu.nl/-/media/hu/afbeeldingen/algemeen/hu-logo.ashx')}
        alt={text('Alt', 'image')}
        halign={select('Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'left')}
        valign={select('Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'top')}
        width={text('Width', '500px')}
        height={text('Height', '250px')}
        spacing={text("Spacing (top, right, bottom, left)", '0 0 0 0')}/>;
};

export const textElement = () => {
    return <Text
        type={select('Type', {Placeholder: 'placeholder', H1: 'h1', H2: 'h2', H3: 'h3', Label: 'label', Bold: 'bold'}, 'placeholder')}
        sentences={number('Placeholder sentences', '4')}
        halign={select('Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'left')}
        valign={select('Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'top')}
        textalign={select('Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'left')}
        spacing={text("Spacing (top, right, bottom, left)", '0 0 0 0')} />;
};