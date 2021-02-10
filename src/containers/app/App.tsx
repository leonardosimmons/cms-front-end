import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { load as loadAPI } from  '../../store/banks/Api';
import { load as loadCategories } from '../../store/banks/Categories';
import { load as loadPosts } from '../../store/banks/Posts';

import HomePage from '../pages/home';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const initApp = useCallback(() => {
    dispatch(loadAPI());
    dispatch(loadCategories());
    dispatch(loadPosts());
  }, [ dispatch ]);

  useEffect(() => {
    initApp();
  }, [ initApp ]);

  return (
    <div className="App h-screen max-w-full relative bg-blue-100">
      <div className="App__container h-9/10 w-9/10 set-center">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
