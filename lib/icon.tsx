import React from 'react';
import './importIcons'
import 'icon.scss'

interface IconProps {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className = "tutu-icon">
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
}

export default Icon;
