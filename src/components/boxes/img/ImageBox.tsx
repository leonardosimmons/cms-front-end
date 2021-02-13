import React from 'react';
import { ImageConfig } from '../../../store/types';

const Image: React.FunctionComponent<ImageConfig> = ({ parent, image, previewMode }) => {
  return (
    <img className={`
      ${ parent }__blog-post--img
      ${ previewMode!.current ? 
        'h-full w-full object-contain' : 
        'h-full w-full object-contain' }`} 
      src={ image } alt="" 
    />
  );
};

export default Image;