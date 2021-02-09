import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import { BlogPost } from '../../../store/types/post';


const Post: React.FunctionComponent<BlogPost> = ({ 
  title, 
  author, 
  date, 
  content, 
  image,
  tags, 
  commentCount, 
  status, 
}) => {
  const [ name ] = useState(Element.POST);

  return (
    <div className={`${ name }`}>

    </div>
  );
};

export default Post;