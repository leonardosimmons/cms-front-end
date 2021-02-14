import React from 'react';

import Button from '../../../buttons/BaseButton-01';

type ContentBlockProps = {
  previewMode: boolean;
  content: string;
  btnArrow: boolean;
  btnText: string;
  btnClickHandler: () => void;
}

const ContentBlock: React.FunctionComponent<ContentBlockProps> = ({previewMode, content, btnArrow, btnText, btnClickHandler}): JSX.Element => {
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