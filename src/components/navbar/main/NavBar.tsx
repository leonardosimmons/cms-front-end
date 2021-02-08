import React, { useState } from 'react';

import Element from '../../../store/keys/elements'
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../boxes/logo';
import MenuTabs from '../../lists/base';

const NavBar: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.MAIN_NAVBAR);
  
  const temp: any = [{ text: 'apples'}, {text: 'oranges'}, {text: 'tomatoes'}, {text: 'cucumbers'}];

  return (
    <nav className={`${ name }`}>
      <div className={`${ name }__container`}>
        <LogoBox 
          name={ name }
          logo={ logo }
        />
        <MenuTabs 
          name={ name }
          list={temp} 
        />
      </div>
    </nav>
  );
};

export default NavBar;