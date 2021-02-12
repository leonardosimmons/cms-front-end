import React from 'react';

type ImageBoxProps = {
  parent: string;
  image: string;
}

const LogoBox: React.FunctionComponent<ImageBoxProps> = ({ parent, image }) => {
  return (
    <div className={`${ parent }__image-box`}>
      <img className={`${ parent }__image-box--img  transform-gpu scale-75`}
        src={ image } 
        alt="" />
    </div>
  );
};

export default LogoBox;