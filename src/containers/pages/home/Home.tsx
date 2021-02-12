import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../store/store';

import Element from '../../../store/keys/elements';
import img from '../../../assets/images/people-at-desk-01.png';
import NavigationBar from '../../../components/navbar/main';
import BlogPost from '../../../components/posts/blog';


const Home: React.FunctionComponent = (): JSX.Element => {
  const [ name ] = useState<string>(Element.HOME_PAGE);
  const posts = useSelector((state: RootState) => state.posts.bank[0] || '');


  const fakeTags = ['apples', 'oranges', 'bananas', 'pears'];

  return (
    <div className={`${ name } h-full max-w-full flex flex-col rounded`}>
      <NavigationBar />
      <div className={`${ name }__dashboard flex-auto flex`}>
        <div className={`
          ${ name }__interface 
          flex-70 flex justify-center items-center rounded-bl-3xl bg-yellow-700`}>
          <div className={`${ name }__interface--container h-95/100 w-95/100`}>
          <div className={`${ name }__interface--heading flex p-2`}>
            <h1 className={`text-6xl font-semibold pr-2`}>Blog Posts</h1>
            <h2 className={`text-xl font-medium self-end`}>(Recently Featured)</h2>
          </div>
            <div className={`${ name }__interface--body p-2`}>
              <BlogPost
                index={ 0 }
                type={ posts.type }
                id={ posts.id } 
                status={ posts.status } 
                title={ posts.title }
                author={ posts.author }
                date={ posts.date }
                tags={ fakeTags } 
                image={ 
                  <div className={`${ name }__blog-post--img-box`}>
                    <img className={`${ name }__blog-post--img`} 
                      src={ img } alt="" />
                  </div> 
                }
                content={ <div className={`${ name }__blog-post--content`}>{ posts.content }</div> }>
              </BlogPost>
            </div>
          </div>
        </div>
        {
          <div className={`${ name }__side-bar h-full flex-30 rounded-br-3xl bg-green-700`}></div>
        }
      </div>
    </div>
  );
};

export default Home;


/* 

  <div id="home-page" className={`rounded h-full max-w-full`}>
    <div id="main-container" className={`h-full w-full flex flex-col rounded-3xl bg-red-200`}>
      <NavigationBar />
      <div id="body" className={`flex-auto flex`}>
        <div id="content" className={`h-95/100 w-9/10 flex flex-col rounded-bl-3xl items-center`}>
          <div id="heading" className={`h-16 w-9/10 flex justify-self-start`}>
            <h1 className={`pb-3 px-2 text-4xl self-end font-bold`}>Blog Posts</h1>
            <h2 className={`pb-3 px-2 text-base self-end`}>Recently Featured</h2>
          </div>
          <div id="body" className={`h-9/10 w-9/10 flex justify-start border-white border-2 border-solid`}>
            <BlogPost
              type={ Element.BLOG_POST }
              preview={ true }
              id={ posts.id } 
              categoryId={ posts.categoryId } 
              tags={ fakeTags } 
              status={ posts.status } 
              commentCount={ posts.commentCount }
              title={ posts.title }
              author={ posts.author }
              date={ posts.date }
              image={ <img className={`flex-3rd max-h-44 mr-4`} src={ img } alt="" /> }
              content={ <div className={` flex-1`}>{ posts.content }</div> }>
            </BlogPost>
          </div>
        </div>
        {
          windowSize > 1300 && 
          <div id="side-bar" className={`flex-3rd rounded-br-3xl bg-green-900`}></div>
        }
      </div>
    </div>
  </div>

*/ 