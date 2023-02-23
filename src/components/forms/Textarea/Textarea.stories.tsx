import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from './Textarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Forms/Textarea',
    component: Textarea,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: 'text' },
        labelPosition: { control: { type: 'select', options: ['top', 'left', 'right', 'bottom'] } },
        placeholder: { control: 'text' },
    },
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Textarea',
    labelPosition: 'top',
    placeholder: 'Placeholder',
};