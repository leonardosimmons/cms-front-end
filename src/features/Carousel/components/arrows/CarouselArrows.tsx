import React, { useState, useEffect } from 'react';
import { ArrowConfig, ArrowStyles } from './types';
import Element from '../../../../store/keys/elements/elements';

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
  const [ name ] = useState<string>(Element.ARROW);
  
 /* --------------------  STYLES  -------------------- */
  const [ styles, setStyles ] = useState<ArrowStyles>(initArrowStyle);

  useEffect(() => {
    const style = {
      container: {
        backgroundColor: `${ index === 1 ? 'white' : index === 2 ? 'white' : 'white' }`,
        right: `${ direction === Element.RIGHT ? '25px' : ''}`,
        left: `${ direction === Element.LEFT ? '25px' : ''}`,
      },
      arrow: {
        transform: `translateX(${direction === Element.LEFT ? '-2' : '2'}px)`
      }
    };
    setStyles(style);

    return () => {
      setStyles(initArrowStyle);
    }
  }, [ direction, index ]);
  
  return (
    <div className={`${ name } absolute h-12 w-12 flex justify-center items-center rounded-full cursor-pointer text-white bg-green-400`}
      style={ styles.container }
      onClick={ clicked } >
      { 
        direction === 'right' ?
        <span className={`${ name }__right`} style={ styles.arrow }>&#62;</span>
        :
        <span className={`${ name }__left`} style={ styles.arrow }>&#60;</span> 
      }
    </div>
  );
};

export default Arrows;
