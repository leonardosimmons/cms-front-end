import React, { useState } from 'react';

import Element from '../../store/keys/elements';
import HomePage from '../pages/home';

function App() {
  const [ name ] = useState<string>(Element.APP);

  return (
    <div className={`${ name }`}>
      <div className={`${ name }__container`}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
