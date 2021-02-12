import React from 'react';
import { PostContent } from '../../../store/types/post/post-types';

type BlogContentProps = PostContent;

const BlogContent: React.FunctionComponent<BlogContentProps> = ({
  title,
  author,
  date,
  image,
  content,
  children
}) => {
  return (
    <div id="blog-content">
      <div id="header" className="">
        <h2 className="">
          { title }
        </h2>
        <p className="">by { author }</p>
        <p className="">Posted on { date }</p>
      </div>
      { 
        <div>
          { image }
          {content || children} 
        </div>
      }
    </div>
  )
};

export default BlogContent;