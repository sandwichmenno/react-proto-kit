import React from 'react';
import { withKnobs, color, text, select, number, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import InputField from "../../components/InputField";
import Dropdown from "../../components/Dropdown";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import {withInfo} from "@storybook/addon-info";

export default {
    title: 'Inputs',
    decorators: [withInfo, withKnobs]
};

export const button = () => {
    return <Button
        name={text('Name', '')}
        type={select('Type', {Button: 'button', Submit: 'submit', Reset: 'reset'}, 'button')}
        onClick={action('Button click')}
        background={color('Background', '#0065f2')}
        border={text('Border', '1px solid #ffffff')}
        color={color('Text color', '#ffffff')}
        padding={text('Padding', '10px 20px')}
        halign={select('Cell Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
        valign={select('Cell Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'center')}>Click me!</Button>;
};

export const inputField = () => {
    return <InputField
        name={text('Name', '')}
        type={select('Type', {Text: 'text', Password: 'password', Email: 'email', Number: 'number'}, 'center')}
        onChange={action('Input change')}
        background={color('Background', '#ffffff')}
        border={text('Border', '1px solid #eef6ff')}
        color={color('Text color', '#0065f2')}
        padding={text('Padding', '10px 20px')}
        placeholder={text('Placeholder', 'Input field')}/>;
};


export const dropDown = () => {
    return <Dropdown
        name={text('Name', '')}
        onChange={action('Input change')}
        background={color('Background', '#D0D9E2')}
        border={text('Border', '0')}
        color={color('Text color', '#1F313D')}
        halign={select('Cell Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
        valign={select('Cell Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'center')}
        padding={text('Padding', '10px 20px')}
        placeholder={text('Placeholder', 'Input field')}
        items={object('Menu Items', [{label: "Option 1"}, {label: "Option 2"}, {label: "Option 3"}])}>Choose an option</Dropdown>;
};

export const textArea = () => {
    return <TextArea
        name={text('Name', '')}
        onChange={action('Input change')}
        halign={select('Cell Horizontal align', {Center: 'center', Left: 'left', Right: 'right'}, 'center')}
        valign={select('Cell Vertical align', {Center: 'center', Top: 'top', Bottom: 'bottom'}, 'center')}
        background={color('Background', '#ffffff')}
        border={text('Border', '1px solid #D0D9E2')}
        color={color('Text color', '#0065f2')}
        padding={text('Padding', '10px 20px')}
        height={text('Height', '100%')}
        width={text('Width', '100px')}>
        Text area
    </TextArea>
};

export const formField = () => {
    return <Form
        name='form'
        onSubmit={action('Handle submit')}
        width='100%'>

        <FormField
            forName={text('For input name', '')}
            label={text('Label', 'Input field')}
            width={text('Width', '100%')}>
            <InputField type='text' name='testField' background='#ffffff' border='1px solid #eef6ff' padding='10px 20px' color='#0065f2'/>
        </FormField>
    </Form>;
};

export const form = () => {
    return <Form
        name={text('Name', '')}
        onSubmit={action('Handle submit')}
        width={text('Width', '100%')}>
        <FormField
            forName='testField'
            label='Test field'
            width='100%'>
            <InputField type='text' name='testField' background='#ffffff' border='1px solid #eef6ff' padding='10px 20px' color='#0065f2'/>
        </FormField>

        <Button type="submit" halign="left" spacing='0 0 0 15px' background='#0065f2' border='1px solid #ffffff' color='#ffffff' padding='10px 20px'>Submit form</Button>
    </Form>;
};