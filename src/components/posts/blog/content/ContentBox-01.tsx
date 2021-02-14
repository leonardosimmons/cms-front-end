import React from 'react';
import { BlogContentBoxProps } from '../types';


const ContentBox: React.FunctionComponent<BlogContentBoxProps> = ({ parent, previewMode, children}) => {
  return (
    <div className={` ${ parent }__blog-post--content-box
        ${ previewMode ? 
          'w-75/100 mr-6 border-b-2' : 
          'w-80/100 m-auto'}
    `}>
      { children }
    </div> 
  );
};

export default ContentBox;