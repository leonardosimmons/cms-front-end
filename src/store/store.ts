import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import categoryReducer from './banks/Categories';
import postReducer from './banks/Posts'; 

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
