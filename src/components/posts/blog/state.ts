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
      const temp: PostDataToken[] = action.payload;
      const blogs = temp.filter(post => post.type === 'blog');
      const blogPostToken = blogs.map(blog => {
        return { 
          ...blog,
          tags: [], 
          index: 0,
          parent: '',
          preview: false,
          content: undefined,
          image: undefined,
          button: undefined,    
        };
      });
    
      state.bank = blogPostToken;
      state.currentSet = blogPostToken;
    },


  }
});
export const { set } = blogPostSlice.actions;

//*  -----------------------  STATE  -----------------------  *//
export const selectBlogPost = (state: RootState) => state.blogs;
export default blogPostSlice.reducer;