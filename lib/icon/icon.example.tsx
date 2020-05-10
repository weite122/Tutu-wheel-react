import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <h2 style={{marginBottom: '20px'}}>简单例子</h2>
      <Icon name="alipay"/>
      <Icon name="wechat"/>
      <Icon name="qq"/>
    </div>
  );
};

export default IconExample;
