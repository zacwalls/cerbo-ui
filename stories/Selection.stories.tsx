import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Selection } from '../src/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Selection',
    component: Selection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: 'text' },
        type: { 
            control: 'select',
            options: ['checkbox', 'radio'],
        },
    },
} as ComponentMeta<typeof Selection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Selection> = (args) => <Selection {...args} />;
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Selection',
    type: 'checkbox',
};