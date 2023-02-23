import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './Toggle';

export default {
    title: 'Forms/Toggle',
    component: Toggle,
    argTypes: {
        label: { control: 'text' },
        labelPosition: { control: { type: 'select', options: ['top', 'left', 'right', 'bottom'] } },
    },
} as ComponentMeta<typeof Toggle>;


const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
export const Default = Template.bind({});

Default.args = {
    label: 'Toggle',
    labelPosition: 'right',
};