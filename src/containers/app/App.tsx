import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { start } from  '../../store/banks';

import HomePage from '../pages/home';

const App: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    function initApp() {
      dispatch(start());
    }
    initApp();

  }, [ dispatch ]);

  return (
    <div className="App h-screen max-w-full relative bg-gray-200">
      <div className="App__container h-95/100 w-90/100 set-center rounded-3xl shadow-md bg-white">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
