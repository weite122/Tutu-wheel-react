import FormExample from './form.example';
import React from 'react';
import Demo from '../../demo';

const FormDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./form.example.tsx').default}>
      <FormExample/>
    </Demo>
  );
};

export default FormDemo;