import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from '../store';
import { Category } from '../types/category';
import { Post } from '../types/post/post-types';

import { set as initCategories } from './Categories';
import { set as initPosts } from './Posts';


//*  --------------------  INTERFACES  --------------------  *// 
type DataBank = {
  categories: Category[];
  posts: Post[];
}

const initialState: DataBank = {
  categories: [],
  posts: []
};


//*  ----------------------  REDUCER  ----------------------  *// 
export const apiSlice = createSlice({
  name: 'apibank',
  initialState,
  reducers: {}
});


//*  -----------------------  ASYNC  -----------------------  *//
export const start = (): AppThunk => (dispatch) => {
  axios.all([
    axios.get(process.env.REACT_APP_CATEGORIES_API as string, {
      headers: { 'Content-Type': 'application/json' }
    }),
    axios.get(process.env.REACT_APP_POSTS_API as string, {
      headers: { 'Content-Type': 'application/json' }
    })
  ])
  .then(axios.spread((categories, posts) => {
    if (categories.status === 200 && posts.status === 200 &&
        categories.statusText === "OK" && posts.statusText === "OK") 
        {
          const dataBankToken: DataBank = { 
            categories: categories.data, 
            posts: posts.data 
          };

          return dataBankToken;
        }
  }))
  .then(token => {
    dispatch(initCategories(token!.categories));
    dispatch(initPosts(token!.posts));
  })
  .catch(e => console.log(e));
};
