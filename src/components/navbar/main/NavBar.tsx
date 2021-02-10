import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfiguration } from '../../navbar/main/config';

import Element from '../../../store/keys/elements'
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../boxes/logo';
import MenuTabs from '../../lists/base';

const NavBar: React.FunctionComponent = () => {
  const [ name ] = useState<string>(Element.MAIN_NAVBAR);
  const config = useSelector(getConfiguration);

  return (
    <nav className={`${ name } h-24 w-full rounded-t-3xl bg-purple-600`}>
      <div className={`${ name }__container h-full relative flex justify-start items-center`}>
        <LogoBox
          name={ name }
          logo={ logo }
        />
        <MenuTabs
          name={ name } 
          list={ config.categories } 
        />
      </div>
    </nav>
  );
};

export default NavBar;