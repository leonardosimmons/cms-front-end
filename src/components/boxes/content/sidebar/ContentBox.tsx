import React from 'react';
import { ContentBoxProps } from './types';
import Element from '../../../../store/keys';


const ContentBox: React.FunctionComponent<ContentBoxProps> = ({ parent, children }): JSX.Element => 
{
  return (
    <div className={`${ parent }__content-box
      flex flex-col rounded-lg bg-gray-100 border-gray-200 border-2 border-solid shadow mx-auto mt-2
      transition-all duration-700
      ${ parent === Element.BLOG_SECTION ? 'w-85/100' : '' }
    `}>
      { children }
    </div>
  );
};

export default ContentBox;