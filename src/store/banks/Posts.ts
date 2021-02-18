import { AppThunk, RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataToken, PostDataBank } from '../types/post/post-types';
import { setBlogs } from '../../containers/sections/BlogPost/state';

//*  ----------------------  REDUCER  ----------------------  *//
const initialState: PostDataBank = {
  bank: [],
  isLoading: false,
  completed: false
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /*  ------------------------  POSTS  -----------------------  */
    set: (state, action: PayloadAction<PostDataToken[]>) => 
    {
      const posts: PostDataToken[] = action.payload;
      state.bank = posts; 
    },

    /*  ----------------------  isLOADING  ----------------------  */
    completed: (state) =>
    {
      state.completed = !state.completed;
    }

  }
});
export const { set, completed } = postSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//
/** sorts and dispatches blog posts on app initialization */
export const initBlogs = (): AppThunk => (dispatch, getState) => {
  const posts = getState().posts;
  const blogs = posts.bank.filter(post => post.type === 'blog');
  dispatch(setBlogs(blogs));
}


//*  -----------------------  STATE  -----------------------  *//
export const Posts = (state: RootState) => state.posts;
export default postSlice.reducer;
