import React from 'react';
import { DotsConfig, DotStatus } from './types';

const Dot: React.FunctionComponent<DotStatus> = ({ active, index, clicked }) => (
  <span 
    onClick={ clicked }
    style={{ 
    background: `${active ? '#A7F3D0' : '#374151' }`
  }} />
);

const Dots: React.FunctionComponent<DotsConfig> = ({ slides, activeIndex, clicked }) => {

  return(
    <div className={`dots absolute w-full flex justify-center items-center`}>
      { slides.map((slide, index) => (
        <Dot 
          key={ slide }
          index={ activeIndex }
          active={ activeIndex === index }
          clicked={ clicked }
        />
      ))}
    </div>
  )
};

export default Dots;