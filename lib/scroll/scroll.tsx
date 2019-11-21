import React, {HTMLAttributes, UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);

  const onScroll: UIEventHandler = (e) => {
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);
  return (
    <div className="tutu-scroll" {...rest}>
      <div className="tutu-scroll-inner" style={{right: -scrollbarWidth()}}
           ref={containerRef}
           onScroll={onScroll}>
        {children}
      </div>
      <div className="tutu-scroll-track">
        <div className="tutu-scroll-bar" style={{height:barHeight, transform:`translateY(${barTop}px`}} />
      </div>
    </div>
  );
};

export default Scroll;
