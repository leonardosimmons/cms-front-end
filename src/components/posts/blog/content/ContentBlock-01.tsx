import React from 'react';
import { BlogContentBlockProps } from '../types';
import Button from '../../../buttons/BaseButton-01';


const ContentBlock: React.FunctionComponent<BlogContentBlockProps> = ({previewMode, content, btnArrow, btnText, btnClickHandler}): JSX.Element => {
  return (
    <>
      <div className={` mb-4
        ${ previewMode ? 'w-full' : ''}`}>
        { content }
      </div>
      <div className={`${ previewMode ? '' : 'text-center mb-6'}`}>
        <Button 
          arrow={ btnArrow }
          text={ btnText}  
          clicked={ btnClickHandler }
        />
      </div>
    </>
  );
};

export default ContentBlock;