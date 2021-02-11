import React, { useState } from 'react';
import { BlogPostConfig, Post } from '../../../store/types/post';

import Element from '../../../store/keys/elements';
import PostConfig from '../../../components/posts';
import BlogContent from './BlogContent';

type BlogPostProps = Post & BlogPostConfig;

const BlogPost: React.FunctionComponent<BlogPostProps> = ({
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
  parent,
  children
}) => {
  return (
    <PostConfig
      parent={ parent! }
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
          image={ <div>{ image }</div> }>
            { children || content }
        </BlogContent>
    </PostConfig>
  );
};

export default BlogPost;