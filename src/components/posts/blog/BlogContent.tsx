import React from 'react';
import { PostContent, PostConfig } from '../../../store/types/post/post-types';

type BlogContentProps = PostContent & PostConfig;

const BlogContent: React.FunctionComponent<BlogContentProps> = ({ type, title, author, date, image,  content, parent, children }): JSX.Element => {
  return (
    <div className={`${ parent }__content`}>
      <div className={`${ parent }__content--header`}>
        <h2 className={`${ parent }__content--header--heading`}>
          { title }
        </h2>
        <p className={`${ parent }__content--author`}>by <span className="">{ author }</span></p>
        <p className={`${ parent }__content--date`}>Posted on { date }</p>
      </div>
      { 
        <div className={`${ parent }__content--body`}>
          { image }
          { content || children} 
        </div>
      }
    </div>
  )
};

export default BlogContent;

/*
  <div id="blog-content" className={`h-full w-full px-4 py-2`}>
    <div id="header" className="">
      <h2 className={`text-3xl`}>
        { title }
      </h2>
      <p className="">by <span className={`font-bold`}>{ author }</span></p>
      <p className={`text-xs mb-2`}>Posted on { date }</p>
    </div>
    { 
      <div className={`flex h-72 w-full overflow-hidden`}>
        { image }
        { content || children} 
      </div>
    }
  </div>
*/