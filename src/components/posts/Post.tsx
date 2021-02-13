import React from 'react';
import { PostInfo, PostConfig } from '../../store/types/post';

type PostProps = PostConfig & PostInfo

const Post: React.FunctionComponent<PostProps> = ({ id, preview, type, tags,  status,  index, parent, children }): JSX.Element => {
  return (
    <div className={`
      ${ type }__post 
      ${ parent || '' }__post${ index || ''}  
       H-95/100 p-3 pt-6 pb-6 flex-1 flex justify-center
      ${ preview ? '' : 'items-center'} `}
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