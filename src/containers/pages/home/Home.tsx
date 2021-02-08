import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../../components/boxes/logo';
import NavigationBar from '../../../components/navbar/main';

const Home: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.HOME);

  return (
    <div className={`${ name }`}>
      <div className={`${ name }__container`}>
        <NavigationBar
          name={ name } >
          <div className={`${ name }__logo`}>
            <LogoBox 
              name={ name }
              logo={ logo } 
            />
          </div>
          <div className={`${ name }__menu`}>

          </div>
        </NavigationBar>
        <div className={`${ name }__content`}>
          <div className={`${ name }__content--body`}></div>
          <div className={`${ name }__content--sidebar`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;