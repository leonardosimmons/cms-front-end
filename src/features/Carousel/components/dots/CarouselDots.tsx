import React from 'react';
import { DotsConfig, DotStatus } from './types';

const Dot: React.FunctionComponent<DotStatus> = ({ active, index }) => (
  <span style={{ 
    background: `${active ? index === 0 ? 'white' : index === 1 ? 'white' : index === 2 ? 'white' : 'black' : 'black' }`
  }} />
);

const Dots: React.FunctionComponent<DotsConfig> = ({ slides, activeIndex }) => {
  return(
    <div className={`dots absolute w-full flex justify-center items-center`}>
      { slides.map((slide, index) => (
        <Dot 
          key={ slide }
          index={ activeIndex }
          active={ activeIndex === index }
        />
      ))}
    </div>
  )
};

export default Dots;