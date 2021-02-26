import React from 'react';
import { useSelector } from 'react-redux';
import { getConfiguration } from '../../navbar/main/config';

import Element from '../../../store/keys';
import logo from '../../../assets/images/logo.png';
import LogoBox from '../../boxes/logo/LogoBox';
import MenuTabs from '../../lists/base/List';
import TimeClock from '../../time/Clock';
import Date from '../../time/Date'

const NavBar: React.FunctionComponent = (): JSX.Element => {
  const config = useSelector(getConfiguration);

  return (
    <nav className={`${ Element.MAIN_NAVBAR }  
      flex items-center h-20 w-full rounded-t-3xl shadow-sm bg-purple-400 justify-between noselect`}>
      <div className={`${ Element.MAIN_NAVBAR }__left-container 
      flex items-center flex-50 h-full w-95 m-auto px-3 relative text-white text-2xl`}>
        <LogoBox
          name={ Element.MAIN_NAVBAR }
          logo={ logo }>
        </LogoBox>
        <MenuTabs
          parent={ Element.MAIN_NAVBAR } 
          list={ config.categories } 
          hover={ true }>
        </MenuTabs>
      </div>
      <div className={`flex h-full w-80/100 text-white text-4xl justify-center items-center`}>
        <p>Welcome Back</p>
      </div>
      <div className={`${ Element.MAIN_NAVBAR }__right-container 
        flex-50 h-full text-white`}>
        <div className={`h-full flex items-center justify-end mr-12`}>
          <span className={`mr-4 mt-6`}>
            <Date />
          </span>
          <TimeClock />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
