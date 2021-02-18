import React, { useState, useEffect } from 'react';
import { ArrowConfig, ArrowStyles } from './types';
import Element from '../../../../../../store/keys/elements/elements';

const initArrowStyle: ArrowStyles = {
  container: {
    right: '',
    left: ''
  },
  arrow: {
    transform: '',
  }
};

const Arrows: React.FunctionComponent<ArrowConfig> = ({ index, direction, clicked }): JSX.Element => {

 /* --------------------  STYLES  -------------------- */
  const [ styles, setStyles ] = useState<ArrowStyles>(initArrowStyle);

  useEffect(() => 
  {
    const style = {
      container: {
        backgroundColor: `#374151`,
        right: `${ direction === Element.RIGHT ? '0px' : ''}`,
        left: `${ direction === Element.LEFT ? '0px' : ''}`,
        top: '40%'
      },
      arrow: {
        transform: `translateX(${direction === Element.LEFT ? '-3' : '3'}px) translateY(-4px)`
      }
    };
    setStyles(style);

    return () => {
      setStyles(initArrowStyle);
    }
  }, [ direction, index ]);
  
  return (
    <div className={`${ Element.ARROW } absolute h-12 w-12 flex justify-center items-center rounded-full cursor-pointer text-green-200`}
      style={ styles.container }
      onClick={ clicked } >
      { 
        direction === 'right' ?
        <span className={`${ Element.ARROW }__right`} style={ styles.arrow }>&#62;</span>
        :
        <span className={`${ Element.ARROW }__left`} style={ styles.arrow }>&#60;</span> 
      }
    </div>
  );
};

export default Arrows;
