import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../store';
import { TodoDataToken, TodoSectionConfig } from './types';

const initialState: TodoSectionConfig = {
  previewMode: false,
  todos: {
    bank: [],
    current: []
  }
};


//*  ----------------------  REDUCER  ----------------------  *// 
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    initTodos: (state, action: PayloadAction<TodoDataToken[]>) =>
    {
      state.todos.bank = action.payload;
      state.todos.current = action.payload;
    }
  }
});
export const { initTodos } = todoSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//


//*  -----------------------  STATE  -----------------------  *//
export const TodoSection = (state: RootState) => state.todoSection;
export default todoSlice.reducer;
 