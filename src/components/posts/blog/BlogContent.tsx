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
    <div className="">
      <div id="header" className="">
        <h2 className="">
          { title }
        </h2>
        <p className="">by { author }</p>
        <p className="">Posted on { date }</p>
      </div>
      { image }
      { content || children }
    </div>
  )
};

export default BlogContent;