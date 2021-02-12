import React, { useState } from 'react';
import Element from '../../../store/keys/elements';
import { Post } from '../../../store/types/post';
import PostConfig from '../../../components/posts';
import BlogContent from './BlogContent';


const Blog: React.FunctionComponent<Post> = ({ id,  type, tags,  status,  commentCount, title, author, date, image, content, categoryId, children }): JSX.Element => {
  const [ name ] = useState<string>(Element.BLOG_POST);

  return (
    <PostConfig
      parent={ name }
      type={ type }
      id={ id }
      categoryId={ categoryId }
      tags={ tags }
      status={ status }
      commentCount={ commentCount }
      >
        <BlogContent
          parent={ name }
          type={ type }
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

export default Blog;