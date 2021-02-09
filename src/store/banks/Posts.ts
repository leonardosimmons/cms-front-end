import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

import Element from '../keys/elements';

/*  --------------------  INTERFACES  --------------------  */
type Post = {
  id: number;
  categoryId: number;
  title: string;
  author: string;
  date: string;
  tags: string;
  comments: number;
  status: string;
  content: string;
  image: string;
};

type PostBank = {
  posts: Post[];
  isLoading: boolean
};


/*  ----------------------  REDUCER  ----------------------  */
const initialState: PostBank = {
  posts: [],
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
      state.posts = posts;
    },

    /*  ----------------------  isLOADING  ----------------------  */
    isLoading: (state) =>
    {
      state.isLoading = !state.isLoading;
    }

  }
});
export const { set, isLoading } = postSlice.actions;

/*  ------------------------  ASYNC  ------------------------  */
export const load = (): AppThunk => (dispatch, getState) => {
  dispatch(isLoading());
  const url = getState().api.posts;
  axios.get<Post[]>(url, {
    headers: { "Content-Type": "application/json" }})
    .then(res => {
      if (res.status === 200) {
        return res.data
      }

      return null;
    })
    .then(data => dispatch(set(data!)))
    .then(() => dispatch(isLoading()))
    .catch(e => console.log(e))
};

/*  -----------------------  STATE  -----------------------  */
export const Posts = (state: RootState) => state.posts;
export default postSlice.reducer;


