import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { start } from  '../../store/banks';

import HomePage from '../pages/home';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function initApp() {
      dispatch(start());
    }
    initApp();

  }, [ dispatch ]);

  return (
    <div className="App h-screen max-w-full relative bg-blue-100">
      <div className="App__container h-9/10 w-9/10 set-center">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
