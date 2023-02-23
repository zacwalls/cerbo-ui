import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    border: { control: 'boolean' },
    primary: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  border: true,
  primary: true,
  children: 'Button',
};