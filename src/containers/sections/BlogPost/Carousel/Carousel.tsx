import React, { useEffect, useCallback, useRef } from 'react';
import { RootState } from '../../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { width, next, prev, firstSlide, lastSlide, setSlideCount, setDotCount } from '../state';
import { CarouselConfig, CarouselStatus } from './types';

import Element from '../../../../store/keys/elements';
import CarouselContent from './CarouselContent';
import Arrow from './components/arrows';
import Dots from './components/dots';


const Carousel: React.FunctionComponent<CarouselConfig> = ({ autoPlay, previewMode, children }): JSX.Element => {
  //*  -------------------  STATE  -------------------  *//
  const dispatch = useDispatch();
  const carousel: CarouselStatus = useSelector((state: RootState) => state.blogSection.carousel);

  //* --------------------  WIDTH  -------------------- *// 
  /** gets the width of the curernt user screen */
  useEffect(() => 
  {
    dispatch(width(window.innerWidth));

    return () => {
      dispatch(width(0));
    }
  }, [ dispatch ]);


  //* -------------------  CONTROLS  ------------------- *//   
  const nextSlide = useCallback(() => 
  {
    if (carousel.activeIndex === carousel.slideCount -1 )
      return dispatch(lastSlide());

    dispatch(next());
  }, [ carousel.activeIndex, carousel.slideCount, dispatch ]);


  const prevSlide = useCallback(() => 
  {
    if (carousel.activeIndex === 0)
      return dispatch(firstSlide());
    
    dispatch(prev());
  }, [ carousel.activeIndex, dispatch ]);


  //* -------------------  AUTOPLAY  ------------------- *//
  const autoPlayRef = useRef<any>(); 

  const updateAutoPlayRef = useCallback((): void => 
  {
    autoPlayRef.current = nextSlide;
  }, [ nextSlide]);

  useEffect(() => 
  {
    updateAutoPlayRef();
  }, [ updateAutoPlayRef ]);

  // Autoplay feature (handler)
  useEffect(() => 
  {
    const play = () => 
    {
      return autoPlayRef.current();
    }
    
    if(autoPlay && previewMode) 
    {
      const interval = setInterval(play, parseInt(autoPlay!) * 1000);
      return () => clearInterval(interval)
    }

  }, [ autoPlay, previewMode ]);

  
  //* --------------------  HANDLERS  -------------------- *//  
  const handleSlideCount = useCallback((count: number): void => 
  {
    dispatch(setSlideCount(count));
  }, [ dispatch ]);
  
  const handleDotCount = useCallback((slides: number): void => 
  {
    let dots: number[] = [];
    for(let i = 0; i < slides; i++ ) 
    {
      dots.push(i + 1);
    }
    
    dispatch(setDotCount(dots));
  }, [ dispatch ]);

  const dotClickHandler = useCallback(() => 
  {
    // click handle logic here (upcomming feature)
  }, [ ]);


  //* ---------------------  RENDER  --------------------- *// 
  return (
    <div className={`
      ${ Element.CAROUSEL } 
      ${ previewMode ? 'h-full' : 'h-vh-full overflow-y-auto'}
      relative w-75r m-auto`}>
      <CarouselContent
        translate={ carousel.translate }
        transition={ carousel.transition }
        width={ carousel.width }
        slideCount={ handleSlideCount }
        dotCount={ handleDotCount }
      >
        { children } 
      </CarouselContent>
      { previewMode && (
      <>
        <>
          <Arrow direction="left" index={ carousel.activeIndex } clicked={ prevSlide } />
          <Arrow direction="right" index={ carousel.activeIndex } clicked={ nextSlide } />       
        </>
        <Dots 
        slides={ carousel.dotCount }
        activeIndex={ carousel.activeIndex }
        clicked={ dotClickHandler }
        />
      </>
      )}
    </div>
  );
};

export default Carousel;
