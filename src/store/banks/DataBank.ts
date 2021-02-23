import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { CategoryDataToken } from '../types/category/category-types';
import { PostDataToken } from '../types/post/post-types';

import { set as initCategories } from './Categories';
import { set as initPosts } from './Posts';

import { initBlogs  } from './Posts';
import { initTodos } from '../../containers/sections/Todo/state';
import { TodoDataToken } from '../../containers/sections/Todo/types';


//*  --------------------  INTERFACES  --------------------  *// 
type DataBank = {
  categories: CategoryDataToken[];
  posts: PostDataToken[];
  todos: TodoDataToken[];
  isLoading: boolean;
}

const initialState: DataBank = {
  categories: [],
  posts: [],
  todos: [],
  isLoading: false
};


//*  ----------------------  REDUCER  ----------------------  *// 
export const apiSlice = createSlice({
  name: 'apibank',
  initialState,
  reducers: {
    /*  ----------------------  isLOADING  ----------------------  */
    isLoading: (state) =>
    {
      state.isLoading = !state.isLoading;
    }
  }
});
export const { isLoading } = apiSlice.actions;


//*  -----------------------  ASYNC  -----------------------  *//
export const initAux = (): AppThunk => (dispatch, getState) => {
  const todos = getState().todoSection.todos.bank;  
  dispatch(initBlogs());
  dispatch(initTodos(todos));
}


export const start = (): AppThunk => (dispatch) => {
  dispatch(isLoading());
  axios.all([
    axios.get(process.env.REACT_APP_CATEGORIES_API as string, {
      headers: { 'Content-Type': 'application/json' }
    }),
    axios.get(process.env.REACT_APP_POSTS_API as string, {
      headers: { 'Content-Type': 'application/json' }
    }),
    axios.get(process.env.REACT_APP_READ_TODOS_API as string, {
      headers: { 'Content-Type': 'application/json' }
    })
  ])
  .then(axios.spread((categories, posts, todos) => {
    if (categories.status === 200 && posts.status === 200 &&
        categories.statusText === "OK" && posts.statusText === "OK") 
        {
          const dataBankToken: DataBank = { 
            categories: categories.data, 
            posts: posts.data,
            todos: todos.data,
            isLoading: false 
          };

          return dataBankToken;
        }
  }))
  .then(token => {
    dispatch(initCategories(token!.categories));
    dispatch(initPosts(token!.posts));
  })
  .then(() => {
    dispatch(initAux());
    dispatch(isLoading());
  })
  .catch(e => console.log(e));
};
