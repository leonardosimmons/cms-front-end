import React, { useState } from 'react';

import Element from '../../../store/keys/elements/elements';
import { BlogPostConfig, BlogPostData } from '../../../store/types/post/post-types';


type BlogPostProps = BlogPostConfig & BlogPostData;

const Post: React.FunctionComponent<BlogPostProps> = (props) => {
  const { parent, preview, index, id, categoryId, tags, commentCount, status, children } = props;
  const [ name ] = useState(Element.BLOG_POST);

  return (
    <div className={`${ name }__blog-post  h-96 w-24 border-2 border-solid border-white`}>
      <div className={`${ name }__blog-post--container`}>
      { children 
        || 
        <h1>Test Text from child</h1>}
      </div>
    </div>
  );
};

export default Post;