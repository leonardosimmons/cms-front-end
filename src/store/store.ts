import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// banks
import categoryReducer from './banks/Categories';
import postReducer from './banks/Posts'; 

// components
import timeReducer from '../components/time/state';

// containers
import carouselReducer from '../containers/sections/BlogPost/Carousel/state';
import blogSectionReducer from '../containers/sections/BlogPost/state';


export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    posts: postReducer,
    time: timeReducer,
    blogCarousel: carouselReducer,
    blogSection: blogSectionReducer, 
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
