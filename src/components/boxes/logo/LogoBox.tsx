import React from 'react';

type LogoBoxProps = {
  name: string;
  logo: string;
}

const LogoBox: React.FunctionComponent<LogoBoxProps> = ({ name, logo }) => {
  return (
    <div className={`${ name }__logo-box`}>
      <img className={`${ name }__logo-box--img`}
        src={ logo } 
        alt="" />
    </div>
  );
};

export default LogoBox;