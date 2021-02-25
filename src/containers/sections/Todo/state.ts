import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from '../../../store';
import { AddTodoToken, TodoDataToken, TodoSectionConfig } from './types';

import State from '../../../store/keys';


const initialState: TodoSectionConfig = {
  previewMode: false,
  todos: {
    bank: [],
    current: []
  },
  addTodo: {
    buffer: {
      title: '',
      note: ''
    }
  },
  status: 'idle',
};


//*  ----------------------  REDUCER  ----------------------  *// 
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // * ------------------  INITIALIZATION  ------------------  *//
    initTodos: (state, action: PayloadAction<TodoDataToken[]>) =>
    {
      state.todos.bank = action.payload;
      state.todos.current = action.payload;
    },
    // * ---------------------  TODO LIST  ---------------------  *//
    updateTodoList: (state, action: PayloadAction<TodoDataToken[]>) =>
    {
      state.todos.current = action.payload;
    },

    // * ---------------------  ADD TODO  ---------------------  *//
    // BUFFERS
    setTitleBuffer: (state, action: PayloadAction<string>) => 
    {
      state.addTodo.buffer.title = action.payload;
    },
    setNoteBuffer: (state, action: PayloadAction<string>) => 
    {
      state.addTodo.buffer.note = action.payload;
    },
    clearBuffer: (state) =>
    {
      state.addTodo.buffer.title = '';
      state.addTodo.buffer.note = '';
    },

    // * ----------------------  STATUS  ----------------------  *//
    status: (state, action: PayloadAction<string>) =>
    {
      state.status = action.payload;
    }
  
  }
});
export const 
{ 
  initTodos, clearBuffer, status,
  setTitleBuffer, setNoteBuffer, updateTodoList
} = todoSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//
export const addNewTodo = (token: AddTodoToken): AppThunk => (dispatch, getState) =>
{
  dispatch(status(State.PENDING));

  const source = axios.CancelToken.source();
  axios.post(process.env.REACT_APP_CREATE_TODOS_API as string, token)
    .then(res => console.log(res.data.message))
    .then(() => source.cancel())
    .then(() => dispatch(status(State.UPDATE)))
    .catch(e => { 
      dispatch(status(State.ERROR));
      console.log(e);
    });
}

//*  -----------------------  STATE  -----------------------  *//
export const TodoSection = (state: RootState) => state.todoSection;
export default todoSlice.reducer;
 