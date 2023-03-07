import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RichText } from './RichText';

export default {
    title: 'Forms/RichText',
    component: RichText,
    argTypes: {
        value: { control: 'text' },
        editing: { control: 'boolean' },
        onChange: { action: 'changed' }
    }
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => <RichText {...args} />;
export const Default = Template.bind({});

Default.args = {
    value: 'Hello World',
    editing: true,
    onChange: (editorHTML) => {
        console.log(editorHTML);
    }
};