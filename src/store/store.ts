import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import apiReducer from './banks/Api';
import categoryReducer from './banks/Categories';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
