import React from 'react';
import Element from '../../../store/keys';
import { Post } from '../../../store/types/post';

import PostConfig from '../../../components/posts';
import BlogContent from './BlogContent';


const Blog: React.FunctionComponent<Post> = ({ id, index,  type, tags,  status,  commentCount, title, author, date, image, content, preview, categoryId, children }): JSX.Element => {

  return (
    <PostConfig
      parent={ Element.BLOG_POST }
      index={ index! + 1}
      preview={ preview }
      type={ type }
      id={ id }
      categoryId={ categoryId }
      tags={ tags }
      status={ status }
      commentCount={ commentCount }
    >
      <BlogContent
        parent={ Element.BLOG_POST }
        preview={ preview }
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