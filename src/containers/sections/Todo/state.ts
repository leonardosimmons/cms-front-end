import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../store';
import { TodoDataToken, TodoSectionConfig } from './types';

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
    },
    input: {
      title: '',
      note: ''
    }
  }
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
    clearCache: (state) =>
    {
      state.addTodo.buffer.title = '';
      state.addTodo.buffer.note = '';
    },

    // INPUTS
    setTitle: (state, action: PayloadAction<string>) =>
    {
      state.addTodo.input.title = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) =>
    {
      state.addTodo.input.note = action.payload;
    }

  }
});
export const 
{ 
  initTodos, clearCache,
  setTitleBuffer, setNoteBuffer, setTitle, setNote
} = todoSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//


//*  -----------------------  STATE  -----------------------  *//
export const TodoSection = (state: RootState) => state.todoSection;
export default todoSlice.reducer;
 