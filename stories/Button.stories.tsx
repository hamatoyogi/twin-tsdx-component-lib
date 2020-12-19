import React from 'react';
import { Meta, Story } from '@storybook/react';
// this is still not working right because storybook doesn't play well without configuring 
// webpack correctly 
// import { Button, ButtonProps } from '../src/components/Button';

// the built component works, but has no types though... 
import { Button } from '../.';

const meta: Meta = {
  title: 'Button',
  component: Button,
  //   argTypes: {

  //   },
  //   parameters: {

  //   },
};

export default meta;

// const Template: Story<ButtonProps> = args => <Button {...args} />;
const Template: Story<any> = args => <Button {...args}>hello</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  isPrimary: true,
};
