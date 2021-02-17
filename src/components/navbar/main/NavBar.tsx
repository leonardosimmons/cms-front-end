import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getConfiguration } from '../../navbar/main/config';

import Element from '../../../store/keys/elements'
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../boxes/logo/LogoBox';
import MenuTabs from '../../lists/base/List';
import TimeClock from '../../time/clock';

const NavBar: React.FunctionComponent = (): JSX.Element => {
  const [ name ] = useState<string>(Element.MAIN_NAVBAR);
  const config = useSelector(getConfiguration);

  return (
    <nav className={`${ name }  
      flex items-center h-24 w-full rounded-t-3xl shadow-sm bg-purple-400 justify-between`}>
      <div className={`${ name }__left-container 
      flex items-center flex-50 h-full w-95 m-auto px-3 relative text-white text-2xl`}>
        <LogoBox
          name={ name }
          logo={ logo }>
        </LogoBox>
        <MenuTabs
          name={ name } 
          list={ config.categories } 
          hover={ true }>
        </MenuTabs>
      </div>
      <div className={`${ name }__right-container 
        flex-50 h-full text-white`}>
        <div className={`h-full flex items-center justify-end mr-12`}>
          <span className={`mr-2 mt-7 font-medium`}>Current Time: </span>
          <TimeClock />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;