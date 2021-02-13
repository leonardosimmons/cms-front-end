import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../store/store';

import Element from '../../../store/keys/elements';
import img from '../../../assets/images/people-at-desk-01.png';
import NavigationBar from '../../../components/navbar/main';
import BlogPost from '../../../components/posts/blog';
import Button from '../../../components/buttons/BaseButton-01';


const Home: React.FunctionComponent = (): JSX.Element => {
  const previewMode = useRef<boolean>(true);
  const [ name ] = useState<string>(Element.HOME_PAGE);
  const posts = useSelector((state: RootState) => state.posts.bank[1] || '');


  const fakeTags = ['apples', 'oranges', 'bananas', 'pears'];

  return (
    <div className={`${ name } h-full max-w-full flex flex-col rounded`}>
      <NavigationBar />
      <div className={`${ name }__dashboard flex-auto flex`}>
        <div className={`
          ${ name }__interface 
          flex-75 flex justify-center items-center rounded-bl-3xl bg-white`}>
          <div className={`${ name }__interface--container h-full w-95/100 flex flex-col`}>
            { 
              previewMode.current && 
                <div className={`${ name }__interface--heading h-18 w-30/100 flex p-2 border-b-2 mt-3`}>
                  <h1 className={`text-5xl font-semibold pr-2 self-end mb-2`}>Blog Posts</h1>
                  <h2 className={`text-base font-medium self-end mb-2 ml-1`}>(Recently Featured)</h2>
                </div>
            }
            <BlogPost
              index={ 0 }
              preview={ previewMode.current }
              type={ posts.type }
              id={ posts.id } 
              status={ posts.status } 
              title={ posts.title }
              author={ posts.author }
              date={ posts.date }
              tags={ fakeTags } 
              image={ 
                <div className={` ${ name }__blog-post--img-box 
                  ${ previewMode.current ? 
                    'h-40 w-25/100' : 
                    'self-center mb-4' }`}>
                  <img className={`
                    ${ name }__blog-post--img
                    ${ previewMode.current ? 
                      'h-40 w-85/100 object-contain' : 
                      '' }`} 
                    src={ img } alt="" 
                  />
                </div> 
              }
              content={ 
                <div className={` ${ name }__blog-post--content-box
                    ${ previewMode.current ? 
                      'w-75/100 mr-6 border-b-2' : 
                      'w-80/100 m-auto'}
                `}>
                  <div className={`${ previewMode.current ? 'w-full mb-4' : ''}`}>
                    { posts.content }
                  </div>
                  <Button 
                    text={'Read More'} />
                </div> 
              }
              >
            </BlogPost>
          </div>
        </div>
        {
          <div className={`${ name }__side-bar h-full flex-25 rounded-br-3xl bg-yellow-600`}></div>
        }
      </div>
    </div>
  );
};

export default Home;
