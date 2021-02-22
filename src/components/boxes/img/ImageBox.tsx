import React from 'react';
import { ImageProps } from './types';

const Image: React.FunctionComponent<ImageProps> = ({ parent, image, previewMode }) => {
  return (
    <img className={`
      ${ parent }__blog-post--img
      ${ previewMode! ? 
        'h-full w-full object-contain' : 
        'h-full max-w-full object-contain' }`} 
      src={ image } alt="" 
    />
  );
};

export default Image;