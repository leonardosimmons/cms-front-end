import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { PostDataToken } from '../../../store/types/post/post-types';
import { BlogPostStatus } from './types'


//*  ----------------------  REDUCER  ----------------------  *//
const initialState: BlogPostStatus = {
  bank: [],
  current: { 
    id: 0,
    type: '',
    tags: [],
    status: '',
    categoryId: 0,
    commentCount: 0,

    title: '',
    author: '',
    date: '',
    content: undefined,
    image: undefined,
    button: undefined,
    
    index: 0,
    parent: '',
    preview: false,
 
  },
  currentSet: []
};

export const blogPostSlice = createSlice({
  name: 'blogPost',
  initialState,
  reducers: {
    /*  ------------------------  POSTS  -----------------------  */
    set: (state, action: PayloadAction<PostDataToken[]>) => 
    {
      // const blogs: PostDataToken[] = action.payload;
      // const blogPostToken = blogs.map(blog => {
      //   return { 
      //     ...blog,
      //     tags: [], 
      //     index: 0,
      //     parent: '',
      //     preview: false,
      //     content: undefined,
      //     image: undefined,
      //     button: undefined,    
      //   };
      // });
      state.bank = action.payload;
      state.currentSet = action.payload;
    },

    updateCurrentBlogList: (state, action: PayloadAction<PostDataToken[]>) => {
      state.currentSet = action.payload;
    }
  }
});
export const { set } = blogPostSlice.actions;

//*  -----------------------  STATE  -----------------------  *//
export const BlogPosts = (state: RootState) => state.blogs;
export default blogPostSlice.reducer;