import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import Element from '../../../store/keys';
import NavigationBar from '../../../components/navbar/main';

import TodoSection from '../../sections/Todo';

import BlogSection from '../../sections/BlogPost';
import BlogSearchBox from '../../sections/BlogPost/search';
import BlogCategories from '../../sections/BlogPost/Categories';
import { BlogSectionContext } from '../../sections/BlogPost/types';

import WeatherWidget from '../../../widgets/weather';

const Home: React.FunctionComponent = (): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const blogSection: BlogSectionContext = useSelector((state: RootState) => state.blogSection);

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
            ${ blogSection.previewMode ? 'overflow-auto' : 'overflow-y-auto'}`}>
            {
              blogSection.previewMode && 
              <div>
                <TodoSection
                  parent={ Element.HOME_PAGE }> 
                </TodoSection>
              </div>
            }
            <div>
            <BlogSection 
              parent={ Element.HOME_PAGE }>
            </BlogSection>  
            </div>
          </div>
        </div>
        {
          <div className={`${ Element.HOME_PAGE }__side-bar 
            h-full flex-25 flex flex-col rounded-br-3xl bg-yellow-700`}>
            <div className={`TEMP h-31r w-90/100 mx-auto mt-3`}>
              <WeatherWidget>
              </WeatherWidget>
            </div>
            {
              BlogSection && 
                <div className={`flex flex-col justify-between items-center
                  ${ blogSection.previewMode ? 'h-20r' : 'h-20r'}`}>     
                  <BlogSearchBox />
                  <BlogCategories
                    hover={ true }
                    tags={ blogSection.blogs.tags }  >
                  </BlogCategories>
                </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Home;
