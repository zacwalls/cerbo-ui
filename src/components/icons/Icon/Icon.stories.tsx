import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { Icons } from '../Icons/Icons';

export default {
    title: 'Icons/Icon',
    component: Icon,
    argTypes: {
        title: { control: 'text' },
        size: {
            control: 'select',
            options: ['16', '24', '32', '40'],
        },
        name: {
            control: 'select',
            options: Object.keys(Icons),
        },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const Default = Template.bind({});

Default.args = {
    title: 'Icon',
    size: '24',
    name: 'close',
};