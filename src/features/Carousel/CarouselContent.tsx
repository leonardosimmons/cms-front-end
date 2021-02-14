import React, { useState, useEffect } from 'react';
import { CarouselContentProps, CarouselContentStyles } from './types';
import Element from '../../store/keys/elements';

const initContentState: CarouselContentStyles = {
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

    return() => { slideCount(0) };
  }, [ slideCount, children ]);

  //! [DEPRICATED] Note: get slide count from content component (same as slide count) */
  useEffect(() => {
    dotCount!(React.Children.count(children));
  }, [ dotCount, children ])

  /* --------------------  STYLES  -------------------- */ 
  const [ styles, setStyles ] = useState<CarouselContentStyles>();

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

    return () => setStyles(initContentState);
  }, [ height, translate, transition, width, styles, children ]);

  /* --------------------  RENDER  -------------------- */ 
  return (
    <div style={ styles }>
      { children }
    </div>
  );
};

export default CarouselContent;
