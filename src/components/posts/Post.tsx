import React from 'react';
import { PostInfo } from '../../store/types/post';

type PostProps = { 
  parent: string;
  index?: number;
  preview?: boolean;
} & PostInfo

const Post: React.FunctionComponent<PostProps> = ({
  id, 
  categoryId, 
  tags, 
  status, 
  index,
  commentCount,
  parent,
  children
}) => {
  return (
    <div className={`
      ${ parent }__post${ index || ''}  
      h-96 w-24 border-2 border-solid border-white`}
    >
      { children } 
      { commentCount && <div>{ commentCount }</div> }
    </div>
  );
};

export default Post;