import React from "react";
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'Input',  // Название с большой буквы
  // component: Input,  // Убрал, так как Input не определен
}

export const UncontrolledInput = () => <input onChange={action('input changed')} />;
export const ControlledInput = () => <input value={'it-incubator'} onChange={action('input changed')} readOnly />;