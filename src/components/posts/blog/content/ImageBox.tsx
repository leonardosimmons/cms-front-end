import React from 'react';

type BlogImageBoxProps = {
  parent: string;
  previewMode: boolean;
}

const BlogImageBox: React.FunctionComponent<BlogImageBoxProps> = ({ parent, previewMode, children}) => {
  return (
  <div className={` ${ parent }__blog-post--img-box 
    ${ previewMode ? 
      'h-40 w-25/100' : 
      'h-30/100 self-center mb-4' }`}
  >
    { children }
  </div> 
  );
};

export default BlogImageBox;