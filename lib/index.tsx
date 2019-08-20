import Icon from './icon';
import React from 'react';
import ReactDOM from 'react-dom';

const fn = () => {
  console.log(fn);
};

ReactDOM.render(<div>
  <Icon onClick={fn} name="wechat"/>
</div>, document.querySelector('#root'));