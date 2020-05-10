import ButtonExample from './button.example';
import React from 'react';
import Demo from '../../demo';

const ButtonDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./button.example.tsx').default}>
      <ButtonExample/>
    </Demo>
  );
};

export default ButtonDemo;