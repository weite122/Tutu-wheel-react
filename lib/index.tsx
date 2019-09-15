import Icon from './icon/icon';
import React from 'react';
import ReactDOM from 'react-dom';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name="wechat"
        className="xxx"
        onClick={fn}
        onMouseEnter={() => {console.log('enter');}}
        onMouseLeave={() => {console.log('leave');}}/>

</div>, document.querySelector('#root'));