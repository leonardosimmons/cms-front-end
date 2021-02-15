import React, { useState, useEffect, useCallback } from 'react';
import { CarouselContentProps, CarouselContentStyles } from './types';
import Element from '../../store/keys/elements';

const initSlideCount: number = 0;

const initContentStyles: CarouselContentStyles = {
  transform: '',
  transition: '',
  width: '',
  height: Element.BASE_HEADER_SLIDER_HEIGHT,
  display: Element.FLEX_BOX,
};

const CarouselContent: React.FunctionComponent<CarouselContentProps> = ({ width, translate, transition, height = Element.BASE_HEADER_SLIDER_HEIGHT, slideCount, dotCount, children }): JSX.Element => {
  /* --------------------  COUNT  -------------------- */  
  /** Returns the current slide count */
  useEffect(() => {
    const getSlideCount = () => {
      slideCount(React.Children.count(children));
    };
    getSlideCount();

    return() => {
      slideCount(initSlideCount);
    }
  }, [ slideCount, children ]);

  //! [DEPRICATED] Note: get slide count from content component (same as slide count) */
  useEffect(() => {
    dotCount!(React.Children.count(children));
  }, [ dotCount, children ])

  /* --------------------  STYLES  -------------------- */ 
  const [ styles, setStyles ] = useState<CarouselContentStyles>();

  const resetContentStyles = useCallback(() => {
    return initContentStyles;
  }, []);

  /** Creates and set carousel styles */
  useEffect(() => {
    const style = {
      transform: `translateX(-${ translate }px)`,
      transition: `transform ease-out ${ transition }s`,
      height: `${ height }rem`,
      width: `${ width * React.Children.count(children) }px`,
      display: styles!.display,
    };
    setStyles(style);

    return () => {
      setStyles(resetContentStyles);
    }
  }, [ height, translate, transition, width, styles, children, resetContentStyles ]);

  /* --------------------  RENDER  -------------------- */ 
  return (
    <div style={ styles }>
      { children }
    </div>
  );
};

export default CarouselContent;
