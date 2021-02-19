import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';
import { CarouselStatus } from './types';

//*  ----------------------  REDUCER  ----------------------  *// 
const initialState: CarouselStatus = {
  translate: 0,
  activeIndex: 0,
  slideCount: 0,
  dotCount: [],
  width: 0,
  transition: 0.45,
};

const carouselSlice = createSlice({
  name: 'blog-carousel',
  initialState,
  reducers: {
    /* ------------------- GENERAL -------------------- */
    width: (state, action: PayloadAction<number>) => {
      const width = action.payload;
      state.width = width;
    },

    /* ------------------ TRANSLATE ------------------- */
    next: (state) => 
    {
      const index = state.activeIndex;
      state.activeIndex = index + 1;
      state.translate = (index + 1) * state.width;
    },

    prev: (state) =>
    {
      const index = state.activeIndex;
      state.activeIndex = index - 1;
      state.translate = (index - 1) * state.width;
    },

    firstSlide: (state) => 
    {
      const count = state.slideCount;
      state.activeIndex = count - 1;
      state.translate = (count - 1) * state.width;
    },

    lastSlide: (state) => 
    {
      state.activeIndex = 0;
      state.translate = 0;
    },

    resetPosition: (state) =>
    {
      console.log('posistion reset');
      state.translate = 0;
      state.activeIndex = 0;
    },

    /* ------------------ SLIDE COUNT ------------------ */
    setSlideCount: (state, action: PayloadAction<number>) =>
    {
      const slides = action.payload;
      state.slideCount = slides;
    },

    /* ------------------- DOT COUNT ------------------- */
    setDotCount: (state, action: PayloadAction<number[]>) => 
    {
      const dots = action.payload;
      state.dotCount = dots;
    }
  }
});

export const { 
  width, 
  next, 
  prev, 
  firstSlide, 
  lastSlide,  
  setSlideCount, 
  setDotCount,
  resetPosition 
} = carouselSlice.actions;


//*  -----------------------  STATE  -----------------------  *//
export const  selectCarousel = (state: RootState) => state.blogSection.carousel;
export default carouselSlice.reducer;
