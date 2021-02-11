import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataToken, PostDataBank } from '../types/post/post-types';

//*  ----------------------  REDUCER  ----------------------  *//
const initialState: PostDataBank = {
  bank: [],
  isLoading: false
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
