import React from 'react';
import { ContentBoxConfig } from './types';
import Element from '../../../../store/keys/elements/elements';


const ContentBox: React.FunctionComponent<ContentBoxConfig> = ({ parent, children }): JSX.Element => 
{
  return (
    <div className={`${ parent }__content-box
      flex flex-col rounded-lg bg-gray-100 border-gray-200 border-2 border-solid shadow mx-auto mt-4
      transition-all duration-700
      ${ parent === Element.BLOG_SECTION ? 'w-85/100' : '' }
    `}>
      { children }
    </div>
  );
};

export default ContentBox;