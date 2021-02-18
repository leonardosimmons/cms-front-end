import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
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
  setInquiry, setBuffer, setResult, setBlogs, updateCurrentBlogList, resetCurrentBlogList, 
  width, next,  prev, firstSlide, lastSlide,   setSlideCount,  setDotCount 
} = blogSectionSlice.actions;


//*  -----------------------  STATE  -----------------------  *//
export const BlogSection = (state: RootState) => state.blogSection;
export default blogSectionSlice.reducer;
