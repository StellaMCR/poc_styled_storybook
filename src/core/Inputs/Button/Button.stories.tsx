import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '.';


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

export const Primary = () => <Button variant="primary" onClick={action('clicked')}>MyButton</Button>;
export const Secondary = () => <Button variant="secondary" onClick={action('clicked')}>MyButton</Button>;