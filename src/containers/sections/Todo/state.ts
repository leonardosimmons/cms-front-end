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
  filter: {
    buffer: '',
    inquiry: '',
    result: [],
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

    // * ----------------------  STATUS  ----------------------  *//
    status: (state, action: PayloadAction<string>) =>
    {
      state.status = action.payload;
    },

    // * --------------------  TODO LIST  ---------------------  *//
    updateTodoList: (state, action: PayloadAction<TodoDataToken[]>) =>
    {
      state.todos.current = action.payload;
    },
    clearTodoList: (state) =>
    {
      state.todos.current = [];
    },

    // * --------------------  ADD TODO  ---------------------  *//
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

    // * ---------------------  FILTERS  ----------------------  *//
    setFilterBuffer: (state, action: PayloadAction<string>) =>
    {
      state.filter.buffer = action.payload;
    },
    setFilterInquiry: (state, action: PayloadAction<string>) =>
    {
      state.filter.inquiry = state.filter.buffer;
    },
    setFilterResult: (state, action: PayloadAction<TodoDataToken[]>) =>
    {
      state.filter.result = action.payload;
    },
    clearFilterCache: (state) => 
    {
      state.filter.result = [];
    },
    resetFilter: (state) =>
    {
      state.filter.buffer = '';
      state.filter.inquiry = '';
      state.filter.result = [];
    }
  }
});
export const 
{ 
  initTodos, clearBuffer, clearTodoList, status,
  setTitleBuffer, setNoteBuffer, updateTodoList,
  setFilterBuffer, setFilterInquiry, setFilterResult, clearFilterCache, resetFilter
} = todoSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//
export const addNewTodo = (token: AddTodoToken): AppThunk => (dispatch) =>
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

export const deleteTodo = (id: string): AppThunk => (dispatch) => 
{
  dispatch(status(State.PENDING));

  const source = axios.CancelToken.source();
  axios.delete(process.env.REACT_APP_DELETE_TODOS_API as string, { data: { id: id }})
    .then(res => console.log(res.data.message))
    .then(() => source.cancel())
    .then(() => dispatch(status(State.UPDATE)))
    .catch(e => {
      dispatch(status(State.ERROR));
      console.log(e);
    });
};

export const filterTodo = (): AppThunk => (dispatch, getState) =>
{
  dispatch(status(State.PENDING));
  const current = getState().todoSection.filter;
  axios.get<TodoDataToken[]>(
    `${ process.env.REACT_APP_SEARCH_TODOS_API }?tag=%${ current.inquiry !== "" ? current.inquiry : '' }%`, 
  {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => 
  {
    if(res.status === 200 && res.statusText === "OK" && Array.isArray(res.data))
    {
      return res.data
    }
  })
  .then(todos => 
  {
    if (todos) {
      dispatch(setFilterResult(todos as TodoDataToken[]));
      dispatch(updateTodoList(todos as TodoDataToken[]));
    } else {
        dispatch(status(State.ERROR));
    }
  })
  .catch(e => console.log(e))
  .then(() => dispatch(status(State.SUCCESS)));
}

//*  -----------------------  STATE  -----------------------  *//
export const TodoSection = (state: RootState) => state.todoSection;
export default todoSlice.reducer;
 