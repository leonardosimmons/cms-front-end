import React from 'react';
import { PostInfo } from '../../store/types/post';

type PostProps = { 
  index?: number;
  preview?: boolean;
} & PostInfo

const Post: React.FunctionComponent<PostProps> = ({
  id, 
  type,
  categoryId, 
  tags, 
  status, 
  index,
  commentCount,
  children
}) => {
  return (
    <div className={`
      ${ type }__post${ index || ''}  
      h-96 w-24 border-2 border-solid border-white`}
    >
      { children } 
      { commentCount && <div>{ commentCount }</div> }
    </div>
  );
};

export default Post;