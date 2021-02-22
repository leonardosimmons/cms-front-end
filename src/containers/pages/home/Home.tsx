import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import Element from '../../../store/keys';
import NavigationBar from '../../../components/navbar/main';
import BlogSection from '../../sections/BlogPost';
import BlogSearchBox from '../../sections/BlogPost/search';
import BlogCategories from '../../sections/BlogPost/Categories';

const Home: React.FunctionComponent = (): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const blogViewMode: boolean = useSelector((state: RootState) => state.blogSection.previewMode)

  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <div className={`${ Element.HOME_PAGE } h-full max-w-full flex flex-col rounded`}>
      <NavigationBar />
      <div className={`${ Element.HOME_PAGE }__dashboard flex-auto flex overflow-hidden`}>
        <div className={`
          ${ Element.HOME_PAGE }__interface 
          flex-75 flex justify-center items-center rounded-bl-3xl bg-white`}>
           <div className={`
            ${ Element.HOME_PAGE }__interface--container h-full w-full flex flex-col items-center
            ${ blogViewMode ? 'overflow-auto' : ''}`}>
            <BlogSection 
              parent={ Element.HOME_PAGE }>
            </BlogSection>  
          </div>
        </div>
        {
          <div className={`${ Element.HOME_PAGE }__side-bar h-full flex-25 rounded-br-3xl bg-yellow-700`}>
            {
              BlogSection && 
                <div>
                  <BlogSearchBox />
                  <BlogCategories />
                </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Home;
