import React, { useState } from 'react';

import Element from '../../store/keys/elements/elements';
import { BlogPostConfig, BlogPostData } from '../../store/types/post';


type PostProps = BlogPostConfig & BlogPostData;

const Post: React.FunctionComponent<PostProps> = ({
  id, 
  categoryId, 
  parent, 
  index,  
  tags, 
  status, 
  preview, 
  commentCount, 
  children
}) => {
  const [ name ] = useState(Element.BLOG_POST);

  return (
    <div className={`${ name }__blog-post  h-96 w-24 border-2 border-solid border-white`}>
      <div className={`${ name }__blog-post--container`}>
      { children }
      </div>
    </div>
  );
};

export default Post;