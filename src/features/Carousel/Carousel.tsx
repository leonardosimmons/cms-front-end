import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { width, next, prev, firstSlide, lastSlide, setSlideCount, setDotCount } from './state';
import { RootState } from '../../store';
import { CarouselConfig, CarouselStatus } from './types';

import Element from '../../store/keys/elements';
import CarouselContent from './CarouselContent';
import Arrow from './components/arrows';
import Dots from './components/dots';


const Carousel: React.FunctionComponent<CarouselConfig> = ({ autoPlay, slides, children }): JSX.Element => {
  const dispatch = useDispatch();
  const [ name ] = useState<string>(Element.CAROUSEL)
  const carousel: CarouselStatus = useSelector((state: RootState) => state.carousel || '');

  /* --------------------  WIDTH  -------------------- */ 
  /** gets the width of the curernt user screen */
  useEffect(() => {
    dispatch(width(window.innerWidth));

    return () => {
      dispatch(width(0));
    }
  }, [ dispatch ]);


  /* -------------------  CONTROLS  ------------------- */   
  const nextSlide = useCallback(() => {
    if (carousel.activeIndex === carousel.slideCount -1 )
      return dispatch(lastSlide());

    dispatch(next());
  }, [ carousel.activeIndex, carousel.slideCount, dispatch ]);


  const prevSlide = useCallback(() => {
    if (carousel.activeIndex === 0)
      return dispatch(firstSlide());
    
    dispatch(prev());
  }, [ carousel.activeIndex, dispatch ]);


  /* -------------------  AUTOPLAY  ------------------- */ 
  const autoPlayRef = useRef<any>(); 

  const updateAutoPlayRef = useCallback(() => {
    autoPlayRef.current = nextSlide;
  }, [ nextSlide]);

  useEffect(() => {
    updateAutoPlayRef();
  }, [ updateAutoPlayRef ]);

  // Autoplay feature (handler)
  useEffect(() => {
    const play = () => {
      return autoPlayRef.current();
    }
    
    if(autoPlay) {
      const interval = setInterval(play, autoPlay! * 1000);
      return () => clearInterval(interval)
    }

  }, [ autoPlay ]);

  
  /* --------------------  HANDLERS  -------------------- */  
  const handleSlideCount = useCallback((count: number): void => {
    dispatch(setSlideCount(count));
  }, [ dispatch ]);
  
  const handleDotCount = useCallback((dots: number): void => {
    let arr: number[] = [];
    for(let i = 0; i < dots; i++ ) {
      arr.push(i + 1);
    }
    dispatch(setDotCount(arr));
  }, [ dispatch ]);


  /* ---------------------  RENDER  --------------------- */ 
  return (
    <div className={`${ name } relative h-full max-w-full my-0 mx-auto overflow-hidden`}>
      <CarouselContent
        translate={ carousel.translate }
        transition={ carousel.transition }
        width={ carousel.width }
        slideCount={ handleSlideCount }
        dotCount={ handleDotCount }
      >
        {/* CAN be replaced with .map of components instead of props.children */}
        { children } 
      </CarouselContent>
      { !autoPlay && ( // disables arrows when autoPlay is turned on
        <>
          <Arrow direction="left" index={ carousel.activeIndex } clicked={ prevSlide } />
          <Arrow direction="right" index={ carousel.activeIndex } clicked={ nextSlide } />       
        </>
      )}
      <Dots 
        slides={ carousel.dotCount }
        activeIndex={ carousel.activeIndex }
      />
    </div>
  );
};

export default Carousel;

