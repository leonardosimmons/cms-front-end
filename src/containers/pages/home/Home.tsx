import React, { useState } from 'react';

import Element from '../../../store/keys/elements';
import NavigationBar from '../../../components/navbar/main';
import BlogSection from '../../../components/posts/blog/BlogSection';

const Home: React.FunctionComponent = () => {
  //*  ----------------------  STATE  ----------------------  *//
  const [ name ] = useState<string>(Element.HOME_PAGE);
  const [ blogViewMode, setBlogViewMode ] = useState<boolean>();

  //*  --------------------  HANDLERS  --------------------  *//

  const blogViewHandler = (status: boolean): void => {
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
            ${ name }__interface--container h-full w-95/100 flex flex-col 
            ${ blogViewMode ? 'overflow-auto' : ''}`}>
            { 
            blogViewMode && 
              <div className={`${ name }__interface--heading h-18 w-30/100 flex p-2 border-b-2 mt-3`}>
                <h1 className={`text-5xl font-semibold pr-2 self-end mb-2`}>Blog Posts</h1>
                <h2 className={`text-base font-medium self-end mb-2 ml-1`}>(Recently Featured)</h2>
              </div>
            }
            <BlogSection 
              parent={ name } 
              currentViewMode={ blogViewHandler } >
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
