import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
    title: 'Icons/Icon',
    component: Icon,
    argTypes: {
        name: { control: 'text' },
        size: { control: 'number' },
        color: { control: 'color' },
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const Default = Template.bind({});

Default.args = {
    size: 24,
    name: 'close',
};