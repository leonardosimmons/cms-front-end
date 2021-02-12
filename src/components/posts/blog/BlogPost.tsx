import React from 'react';
import { BlogPostConfig, Post } from '../../../store/types/post';

import PostConfig from '../../../components/posts';
import BlogContent from './BlogContent';

type BlogPostProps = Post & BlogPostConfig;

const BlogPost: React.FunctionComponent<BlogPostProps> = ({
  type,
  id, 
  categoryId, 
  tags, 
  status, 
  commentCount,
  title,
  author,
  date,
  image,
  content,
  children
}) => {
  return (
    <PostConfig
      type={ type }
      id={ id }
      categoryId={ categoryId }
      tags={ tags }
      status={ status }
      commentCount={ commentCount }
      >
        <BlogContent
          title={ title }
          author={ author }
          date={ date }
          image={ image }
        >
          { children || content }
        </BlogContent>
    </PostConfig>
  );
};

export default BlogPost;