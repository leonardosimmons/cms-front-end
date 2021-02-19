import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../store/store';
import { PostDataToken } from '../../../store/types/post';
import { BlogSectionConfig } from './types';


const initialState: BlogSectionConfig = {
  previewMode: true,
  search: {
    buffer: '',
    inquiry: '',
    result: []
  },
  blogs: {
    bank: [],
    current: []
  },
  carousel: {
    translate: 0,
    activeIndex: 0,
    slideCount: 0,
    dotCount: [],
    width: 0,
    transition: 0.45,
  }
};

//*  ----------------------  REDUCER  ----------------------  *//
const blogSectionSlice = createSlice({
  name: 'blog-section',
  initialState,
  reducers: {
    //* SEARCH
    /*  ------------------------  SEARCH  -----------------------  */
    setInquiry: (state, action: PayloadAction<string>) => {
      state.search.inquiry = action.payload;
    },

    setBuffer: (state, action: PayloadAction<string>) => {
      state.search.buffer = action.payload;
    },

    setResult: (state, action: PayloadAction<PostDataToken[]>) => {
      state.search.result = action.payload;
      state.blogs.current = action.payload;
    },

    //* BLOGS
    /*  -------------------------  BLOGS  -----------------------  */
    setBlogs: (state, action: PayloadAction<PostDataToken[]>) => {
      state.blogs.bank = action.payload;
      state.blogs.current = action.payload;
    },

    updateCurrentBlogList: (state, action: PayloadAction<PostDataToken[]>) => {
      state.blogs.current = action.payload;
    },

    resetCurrentBlogList: (state) => {
      state.blogs.current = state.blogs.bank;
    },

    /*  -----------------------  VIEWMODE  ---------------------  */
    toggleViewMode: (state) => {
      state.previewMode = !state.previewMode;
    },

    //* CAROUSEL
    /* ------------------- GENERAL -------------------- */
    width: (state, action: PayloadAction<number>) => {
      const width = action.payload;
      state.carousel.width = width;
    },

    /* ------------------ TRANSLATE ------------------- */
    next: (state) => 
    {
      const index =state.carousel.activeIndex;
      state.carousel.activeIndex = index + 1;
      state.carousel.translate = (index + 1) *state.carousel.width;
    },

    prev: (state) =>
    {
      const index =state.carousel.activeIndex;
      state.carousel.activeIndex = index - 1;
      state.carousel.translate = (index - 1) *state.carousel.width;
    },

    firstSlide: (state) => 
    {
      const count =state.carousel.slideCount;
      state.carousel.activeIndex = count - 1;
      state.carousel.translate = (count - 1) *state.carousel.width;
    },

    lastSlide: (state) => 
    {
      state.carousel.activeIndex = 0;
      state.carousel.translate = 0;
    },

    resetCarouselPosition: (state) =>
    {
      state.carousel.activeIndex = 0;
      state.carousel.translate = 0;
    },

    //* COUNTS
    /* ------------------ SLIDE COUNT ------------------ */
    setSlideCount: (state, action: PayloadAction<number>) =>
    {
      const slides = action.payload;
      state.carousel.slideCount = slides;
    },

    /* ------------------- DOT COUNT ------------------- */
    setDotCount: (state, action: PayloadAction<number[]>) => 
    {
      const dots = action.payload;
      state.carousel.dotCount = dots;
    }
  }
});
export const { 
  toggleViewMode, 
  setBuffer, setInquiry, setResult, setBlogs, 
  updateCurrentBlogList, resetCurrentBlogList, 
  width, next,  prev, firstSlide, lastSlide,   setSlideCount,  setDotCount, resetCarouselPosition 
} = blogSectionSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//
export const search = (): AppThunk => (dispatch, getState) => {
  const current = getState().blogSection.search;
  axios.get<PostDataToken[]>(`${ process.env.REACT_APP_SEARCH_API}?tag=%${ current.inquiry }%`, 
  {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => 
  {
    if(res.status === 200 && res.statusText === "OK" && Array.isArray(res.data))
    {
      return res.data
    }
  })
  .then(posts => 
  {
    dispatch(setResult(posts as PostDataToken[]));
  })
  .catch(e => console.log(e));
};


export const reset = (): AppThunk => (dispatch) => {
  dispatch(resetCurrentBlogList());
  dispatch(resetCarouselPosition());
};


//*  -----------------------  STATE  -----------------------  *//
export const BlogSection = (state: RootState) => state.blogSection;
export default blogSectionSlice.reducer;
