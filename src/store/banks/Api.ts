import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


/*  --------------------  INTERFACES  --------------------  */
interface ApiBank 
{
  key: boolean;
  categories: string;
  posts: string;
};

const initialState: ApiBank = {
  key: false,
  categories: '',
  posts: '',
};


/*  ----------------------  REDUCER  ----------------------  */
export const apiSlice = createSlice({
  name: 'apibank',
  initialState,
  reducers: {
    load: state =>
    {
      state.key = true;
      state.categories = (process.env.REACT_APP_CATEGORIES_API as string);
      state.posts = (process.env.REACT_APP_POSTS_API as string);
    }
  }
});
export const { load } = apiSlice.actions;


/*  -----------------------  STATE  -----------------------  */
export const Api = (state: RootState) => state.api;
export default apiSlice.reducer;
