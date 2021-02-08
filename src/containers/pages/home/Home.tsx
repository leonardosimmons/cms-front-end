import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../../components/boxes/logo';
import NavMenuTabs from '../../../components/lists/base/List-01';
import NavigationBar from '../../../components/navbar/main';

const Home: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.HOME);

  const temp: any = [{ text: 'apples'}, {text: 'oranges'}, {text: 'tomatoes'}, {text: 'cucumbers'}];

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
            <NavMenuTabs 
              name={ name }
              list={ temp }
            />
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
