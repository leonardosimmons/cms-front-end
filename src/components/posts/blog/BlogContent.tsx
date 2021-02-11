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
      <div className="">
        <h2 className="">
          { title }
        </h2>
        <p className="">by { author }</p>
        <p className="">Posted on { date }</p>
      </div>
      <div className="">
        { image }
      </div>
      <div className="">
        { children || content  }
      </div>
    </div>
  )
};

export default BlogContent;