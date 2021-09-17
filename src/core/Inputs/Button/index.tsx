import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import ButtonProps from './types';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {

    return (
        <ButtonStyle {...props}> {props.children} </ButtonStyle>
  )
}