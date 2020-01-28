import React from 'react';
import { withKnobs, color, text, select, number, object } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';

import Grid from "../../components/Grid";
import Cell from "../../components/Cell";
import Nav from "../../components/Nav";

export default {
    title: 'Layout',
    decorators: [withInfo, withKnobs],
};

export let grid = () => {
    return <Grid
        name={text('Classname', 'grid')}
        background={color('Background', '#eef6ff')}
        gap={text("Gap (top, right, bottom, left)", '50px 0 0 0')}>Cells here</Grid>;
};

export const cell = () => {
    return <Cell
        name={text('Classname', 'cell')}
        background={color('Background', '#eef6ff')}
        gap={text("Gap (top, right, bottom, left)", '50px 0 0 0')}
        halign={select('Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'left')}
        valign={select('Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'top')}
        xs={text('XS width', '100%')}
        sm={text('SM width', '100%')}
        md={text('MD width', '1/2')}
        lg={text('LG width', '1/2')}
        height={number('Height', '100px')}>Content here</Cell>;
};

export const navigation = () => {
    return <Nav
        name={text('Classname', 'navigation')}
        items={object('Items', [{label: "item 1", src: "/"}, {label: "item 2", src: "/"}, {label: "item 3", src: "/"}])}
        valign={select('Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'top')}
        halign={select('Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'left')}
        width={text('Width', '100%')}
        spacing={text("Spacing (top, right, bottom, left)", '0 0 0 0')}/>;
};

export const layoutExample = () => {
    return <Grid
            name={text('Grid Classname', 'grid')}
            background={color('Grid Background', '#0065f2')}
            gap={text("Grid Gap (top, right, bottom, left)", '50px 0 0 0')}>

            <Cell
                name={text('Cell Classname', 'cell1')}
                background={color('Cell Background', '#eef6ff')}
                gap={text("Cell Gap (top, right, bottom, left)", '20px 0 20px 0')}
                halign={select('Cell Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
                valign={select('Cell Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'center')}
                xs={text('Cell XS width', '100%')}
                sm={text('Cell SM width', '50%')}
                md={text('Cell MD width', '1/4')}
                lg={text('Cell LG width', '1/3')}
                height={number('Height', '100px')}>Logo here</Cell>

            <Cell
                name={text('Cell Classname', 'cell2')}
                background={color('Cell Background', '#eef6ff')}
                gap={text("Cell Gap (top, right, bottom, left)", '20px 0 20px 0')}
                halign={select('Cell Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
                valign={select('Cell Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'center')}
                xs={text('Cell XS width', '100%')}
                sm={text('Cell SM width', '50%')}
                md={text('Cell MD width', '1/4')}
                lg={text('Cell LG width', '1/3')}
                height={number('Height', '100px')}>
                <Nav
                    name={text('Menu Classname', 'navigation')}
                    items={object('Menu Items', [{label: "About us", src: "/"}, {label: "Support", src: "/"}, {label: "Contact", src: "/"}])}
                    valign={select('Menu Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'top')}
                    halign={select('Menu Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
                    width={text('Menu Width', '80%')}
                    spacing={text("Menu Spacing (top, right, bottom, left)", '20px 0 0 0')}/>
            </Cell>
        </Grid>;
};