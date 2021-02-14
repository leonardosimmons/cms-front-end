import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import categoryReducer from './banks/Categories';
import postReducer from './banks/Posts'; 
import blogPostReducer from '../components/posts/blog/state';
import carouselReducer from '../features/Carousel/state';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    posts: postReducer,
    blogs: blogPostReducer,
    carousel: carouselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
