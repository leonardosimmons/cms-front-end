import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';
import BlogPost from '../../../components/posts/blog';

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
