import React from 'react';
import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

const meta:Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs', 'button'],
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined', 'text'] },
    },
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      },
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;

export const Color = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8 gap-4" >
    <Button {...args} color="primary">
      Primary
    </Button>

    <Button {...args} color="secondary">
      Secondary
    </Button>
  </div>
);

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8 gap-4">
    <Button {...args} variant="filled">
      Filled
    </Button>

    <Button {...args} variant="outlined">
      Outlined
    </Button>

    <Button {...args} variant="text">
      Text
    </Button>
  </div>
);

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8 gap-4">
    <Button {...args} size="small">
      Small
    </Button>

    <Button {...args} size="medium">
      Medium
    </Button>

    <Button {...args} size="large">
      Large
    </Button>
  </div>
);

// Colors.args = { variant: 'filled' };
