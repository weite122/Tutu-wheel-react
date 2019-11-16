import React, {HTMLAttributes} from 'react';
import "./scroll.scss"

interface Props extends HTMLAttributes<HTMLElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props
  return (
    <div  className="tutu-scroll" {...rest}>
      <div className="tutu-scroll-inner">
        {children}
      </div>
    </div>
  );
};

export default Scroll;
