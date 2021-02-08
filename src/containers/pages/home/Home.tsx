import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';

const Home: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.HOME);

  return (
    <div className={`${ name }`}>
      <div className={`${ name }__container`}>
        <NavigationBar />
        <div className={`${ name }__content`}>
          <div className={`${ name }__content--body`}></div>
          <div className={`${ name }__content--sidebar`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
