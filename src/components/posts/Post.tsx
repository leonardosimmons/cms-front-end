import React from 'react';
import { PostInfo, PostConfig } from '../../store/types/post';

type PostProps = PostConfig & PostInfo

const Post: React.FunctionComponent<PostProps> = (
  { 
    id, 
    preview, 
    type, 
    tags, 
    status, 
    index, 
    parent, children 
  }
): JSX.Element => {
  return (
    <div className={`
      ${ type }__post 
      ${ parent || '' }__post${ index || ''}  
      ${ preview ? 'ml-7' : 'items-center ml-3 noselect'} 
       h-96 p-3 pb-2 flex-1 flex justify-start`}
    >
      { children } 
    </div>
  );
};

export default Post;
