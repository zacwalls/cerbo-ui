import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Forms/Dropdown',
    component: Dropdown,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: 'text' },
        labelPosition: { control: { type: 'select', options: ['top', 'left', 'right', 'bottom'] } },
        placeholder: { control: 'text' },
        options: { control: 'array' },
    },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;
export const Default = Template.bind({});

Default.args = {
    label: 'Dropdown',
    labelPosition: 'top',
    placeholder: 'Placeholder',
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
};