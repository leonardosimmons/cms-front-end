import React from 'react';

type LogoBoxProps = {
  name: string;
  logo: string;
}

const LogoBox: React.FunctionComponent<LogoBoxProps> = ({ name, logo }) => {
  return (
    <div className={`${ name }__logo-box  ml-5`}>
      <img className={`${ name }__logo-box--img transform-gpu  scale-75`}
        src={ logo } 
        alt="" />
    </div>
  );
};

export default LogoBox;