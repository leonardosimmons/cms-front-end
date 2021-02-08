import React from 'react';

type NavBarProps = {
  name: string;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({ name, children }) => {
  
  return (
    <nav className={`main-navbar  ${ name }__main-navbar`}>
      <div className={`main-navbar__container ${ name }__main-navbar--container`}>
        { children }
      </div>
    </nav>
  );
};

export default NavBar;