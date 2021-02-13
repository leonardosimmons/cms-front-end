import React from 'react';
import { PostInfo, PostConfig } from '../../store/types/post';

type PostProps = PostConfig & PostInfo

const Post: React.FunctionComponent<PostProps> = ({ id, preview, type, tags,  status,  index, parent, children }): JSX.Element => {
  return (
    <div className={`
      ${ type }__post 
      ${ parent || '' }__post${ index || ''}  
      ${ preview ? '' : 'items-center'} 
      h-95/100 p-3 pb-6 flex-1 flex justify-center`}
    >
      { children } 
    </div>
  );
};

export default Post;
