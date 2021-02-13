import React from 'react';
import { PostContent, PostConfig } from '../../../store/types/post/post-types';

type BlogContentProps = PostContent & PostConfig;

const BlogContent: React.FunctionComponent<BlogContentProps> = ({ preview, title, author, date, image, content, parent, children }): JSX.Element => {
  return (
    <div className={`${ parent }__content 
      w-95/100 p-2 border-gray-200 border-2 border-solid shadow-md
      ${ preview ? 'h-72' : 'h-85/100 overflow-auto' }`}>
      <div className={`${ parent }__content--header 
        ${ preview ? 'ml-3' : 'ml-5'}`}
      >
        <h2 className={`${ parent }__content--header--heading font-bold
          ${ preview ? 'text-3xl' : 'text-6xl mb-2'} `}>
            { title }
        </h2>
        <p className={`${ parent }__content--author font-light`}>
          by <span className={`text-base font-semibold`}> { author }</span>
        </p>
        <p className={`${ parent }__content--date w-20 text-xs border-b-2 font-thin
          ${ preview ? '' : 'mb-2'}`}>
            Posted on: 
          <span className={`text-sm`}> { date }</span>
        </p>
      </div>
      { 
        <div className={`
          ${ parent }__content--body 
          ${ preview ? 'flex ml-2 mt-1' : 'flex flex-col'}`}
        >
          { image }
          { content || children}
        </div>
      }
    </div>
  )
};

export default BlogContent;
