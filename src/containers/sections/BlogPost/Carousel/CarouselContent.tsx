import React, { useState, useEffect, useCallback } from 'react';
import { CarouselContentProps, CarouselContentStyles } from './types';
import Element from '../../../../store/keys/elements';

const initContentStyles: CarouselContentStyles = {
  transform: '',
  transition: '',
  width: '',
  height: Element.BASE_HEADER_SLIDER_HEIGHT,
  display: 'flex',
};

const CarouselContent: React.FunctionComponent<CarouselContentProps> = ({ width, translate, transition, height = Element.BASE_HEADER_SLIDER_HEIGHT, slideCount, dotCount, children }): JSX.Element => {
  /* -----------------  SLIDE COUNT  ----------------- */ 
  const getSlideCount = useCallback(() => {
    slideCount(React.Children.count(children));
  }, [ slideCount, children ]);
  
  useEffect(() => {
    getSlideCount();
    
    return () => {
      slideCount(0);
    }
  }, [ getSlideCount, slideCount ]);

  useEffect(() => {
    dotCount(React.Children.count(children))
  }, [dotCount, children ]);
  
  /* --------------------  STYLES  -------------------- */ 
  const [ styles, setStyles ] = useState<CarouselContentStyles>(initContentStyles);

  useEffect(() => {
    const style = {
      transform: `translateX(-${ translate }px)`,
      transition: `transform ease-out ${ transition }s`,
      height: `${ height }rem`,
      width: `${ width * React.Children.count(children) }px`, // mulitplies width by # of slides
      display: styles.display,
    };
    setStyles(style);
    console.log(style.width)

    return () => setStyles(initContentStyles);
  }, [ height, translate, transition, width, styles.display, children ]);

  /* --------------------  RENDER  -------------------- */ 
  return (
    <div className="" style={ styles }>
      { children }
    </div>
  );
};

export default CarouselContent;
