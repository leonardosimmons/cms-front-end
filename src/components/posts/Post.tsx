import React from 'react';
import { PostInfo, PostConfig } from '../../store/types/post';

type PostProps = PostConfig & PostInfo

const Post: React.FunctionComponent<PostProps> = ({ id,  type, tags,  status,  index, parent, children }): JSX.Element => {
  return (
    <div className={`
      ${ type }__post 
      ${ parent || '' }__post${ index || ''}  
      
      `}
    >
      { children } 
    </div>
  );
};

export default Post;


/*
  <div className={`
    ${ type }__post${ index || ''}  
      h-72 w-full border-2 border-solid border-white`}
  >
    { children } 
  </div>
*/