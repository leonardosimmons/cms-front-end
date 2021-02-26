import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// banks
import categoryReducer from './banks/Categories';
import postReducer from './banks/Posts'; 

// components
import timeReducer from '../components/time/state';

// containers
import blogSectionReducer from '../containers/sections/BlogPost/state';
import todoSectionReducer from '../containers/sections/Todo/state';

// widgets
import weatherReducer from '../widgets/weather/state';

export const store = configureStore({
  reducer: {
    time: timeReducer,
    categories: categoryReducer,
    posts: postReducer,
    blogSection: blogSectionReducer, 
    todoSection: todoSectionReducer,
    weatherWidget: weatherReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
