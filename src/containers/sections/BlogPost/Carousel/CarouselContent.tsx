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

  //* -----------------  SLIDE COUNT  ----------------- *// 
  const [ count, setCount ] = useState<number>();
  
  const setSlideCount = useCallback((): void => 
  {
    let slides = React.Children.count(children);
    setCount(slides);
  }, [ children ]);
  
  // set slide count
  useEffect(() => 
  {
    setSlideCount();
    slideCount(count as number);
  }, [ count, setSlideCount, slideCount ])

  // get dot count
  useEffect(() => 
  {
    dotCount(count as number)
  }, [ count, dotCount ]);

  
  //* --------------------  STYLES  -------------------- *// 
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

    return () => setStyles(initContentStyles);
  }, [ height, translate, transition, width, styles.display, children ]);

  //* --------------------  RENDER  -------------------- *//
  return (
    <div style={ styles }>
      { children }
    </div>
  );
};

export default CarouselContent;
