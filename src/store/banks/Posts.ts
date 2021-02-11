import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostBank } from '../types/post/post-types';

//*  ----------------------  REDUCER  ----------------------  *//
const initialState: PostBank = {
  bank: [],
  isLoading: false
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /*  ------------------------  POSTS  -----------------------  */
    set: (state, action: PayloadAction<Post[]>) => 
    {
      const posts: Post[] = action.payload;
      state.bank = posts;
    },

    /*  ----------------------  isLOADING  ----------------------  */
    isLoading: (state) =>
    {
      state.isLoading = !state.isLoading;
    }

  }
});
export const { set, isLoading } = postSlice.actions;


//*  -----------------------  STATE  -----------------------  *//
export const Posts = (state: RootState) => state.posts;
export default postSlice.reducer;
