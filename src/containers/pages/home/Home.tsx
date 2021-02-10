import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';

const Home: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.HOME);

  return (
    <div className={`${ name } rounded h-full max-w-full`}>
      <div className={`${ name }__container h-full w-full flex flex-col rounded-3xl bg-red-200`}>
        <NavigationBar />
        <div className={`${ name }__content flex-auto flex`}>
          <div className={`${ name }__content--body flex-auto rounded-bl-3xl`}></div>
          <div className={`${ name }__content--sidebar flex-3rd rounded-br-3xl bg-green-900`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
