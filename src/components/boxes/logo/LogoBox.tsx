import React from 'react';
import { LogoBoxConfig } from './types';


const LogoBox: React.FunctionComponent<LogoBoxConfig> = ({ name, logo }): JSX.Element => {
  return (
    <div className={`${ name }__logo-box`}>
      <img className={`${ name }__logo-box--img transform-gpu scale-75`}
        src={ logo } 
        alt="" />
    </div>
  );
};

export default LogoBox;