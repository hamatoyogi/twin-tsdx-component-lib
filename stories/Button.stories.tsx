import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args}>hello</Button>;

export const Default = Template.bind({});

Default.args = {
  isPrimary: true,
  isSecondary: false,
  isSmall: false,
};
