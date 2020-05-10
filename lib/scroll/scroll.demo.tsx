import ScrollExample from './scroll.example';
import React from 'react';
import Demo from '../../demo';

const ScrollDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./scroll.example.tsx').default}>
      <ScrollExample/>
    </Demo>
  );
};

export default ScrollDemo;