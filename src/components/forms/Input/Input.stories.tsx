import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
    title: 'Forms/Input',
    component: Input,
    argTypes: {
        label: { control: 'text' },
        labelPosition: { control: { type: 'select', options: ['top', 'left', 'right', 'bottom'] } },
        placeholder: { control: 'text' },
    },
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});

Default.args = {
    label: 'Input',
    labelPosition: 'top',
    placeholder: 'Placeholder',
};