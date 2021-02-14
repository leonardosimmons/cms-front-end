import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { width, next, prev, firstSlide, lastSlide, setSlideCount, setDotCount } from './state';
import { RootState } from '../../store';
import { CarouselStatus } from './types';

import Element from '../../store/keys/elements';


const CarouselContent: React.FunctionComponent = (): JSX.Element => {
  const carousel: CarouselStatus = useSelector((state: RootState) => state.carousel || '');
  
  return (
    <div>
      
    </div>
  )
};

export default CarouselContent;

