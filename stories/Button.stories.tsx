import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TestButton, TestButtonTypesEnum } from '../src/components/button/Button';

const meta: Meta<typeof TestButton> = {
  title: 'test/Button',
  component: TestButton,
  args: {
    children: 'test button',
  },
  decorators: [Story => <Story />],
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
      children: 'Secondary Button',
      buttontype: TestButtonTypesEnum.Secondary,
    },
  };
  
