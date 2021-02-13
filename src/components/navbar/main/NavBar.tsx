import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfiguration } from '../../navbar/main/config';

import Element from '../../../store/keys/elements'
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../boxes/logo';
import MenuTabs from '../../lists/base';

const NavBar: React.FunctionComponent = (): JSX.Element => {
  const [ name ] = useState<string>(Element.MAIN_NAVBAR);
  const config = useSelector(getConfiguration);

  return (
    <nav className={`${ name }  h-24 w-full rounded-t-3xl shadow-sm bg-purple-400`}>
      <div className={`${ name }__container  h-full w-95 m-auto relative flex justify-start items-center text-white text-2xl`}>
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