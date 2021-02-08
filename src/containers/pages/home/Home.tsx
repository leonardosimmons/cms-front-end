import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories } from '../../../store/banks/Categories';

import  { load } from '../../../store/banks/Categories';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';

const Home: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.HOME);
  const test = useSelector(Categories);

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
