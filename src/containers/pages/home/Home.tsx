import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';
import BlogSection from '../../../components/posts/blog/BlogSection';

const Home: React.FunctionComponent = (): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const [ name ] = useState<string>(Element.HOME_PAGE);
  const [ blogViewMode, setBlogViewMode ] = useState<boolean>(true);

  //*  --------------------  HANDLERS  --------------------  *//

  const blogViewToggle = (status: boolean): void => {
    const currentViewMode = status;
    setBlogViewMode(currentViewMode);
  }

  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <div className={`${ name } h-full max-w-full flex flex-col rounded`}>
      <NavigationBar />
      <div className={`${ name }__dashboard flex-auto flex overflow-hidden`}>
        <div className={`
          ${ name }__interface 
          flex-75 flex justify-center items-center rounded-bl-3xl bg-white`}>
           <div className={`
            ${ name }__interface--container h-full w-full flex flex-col items-center
            ${ blogViewMode ? 'overflow-auto' : ''}`}>
            <BlogSection 
              parent={ name } 
              currentViewMode={ blogViewToggle }>
            </BlogSection>  
          </div>
        </div>
        {
          <div className={`${ name }__side-bar h-full flex-25 rounded-br-3xl bg-yellow-700`}></div>
        }
      </div>
    </div>
  );
};

export default Home;
