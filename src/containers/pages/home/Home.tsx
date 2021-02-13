import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../store/store';

import Element from '../../../store/keys/elements';
import img from '../../../assets/svg/undraw_Collaboration_re_vyau.svg';
import NavigationBar from '../../../components/navbar/main';
import BlogPost from '../../../components/posts/blog';
import Image from '../../../components/boxes/img';
import Button from '../../../components/buttons/BaseButton-01';


const Home: React.FunctionComponent = () => {
  const [ previewMode, setPreviewMode ] = useState<boolean>(true);
  const [ name ] = useState<string>(Element.HOME_PAGE);
  const posts = useSelector((state: RootState) => state.posts.bank || '');

  const fakeTags = ['apples', 'oranges', 'bananas', 'pears'];

  const blogPostButtonHandler = () => {
    const current = previewMode;
    setPreviewMode(!current);
    console.log('button clicked')
    console.log(current)
  };

  return (
    <div className={`${ name } h-full max-w-full flex flex-col rounded`}>
      <NavigationBar />
      <div className={`${ name }__dashboard flex-auto flex overflow-hidden`}>
        <div className={`
          ${ name }__interface 
          flex-75 flex justify-center items-center rounded-bl-3xl bg-white`}>
          <div className={`
            ${ name }__interface--container h-full w-95/100 flex flex-col 
            ${ previewMode ? 'overflow-auto' : ''}`}>
            { 
            previewMode && 
              <div className={`${ name }__interface--heading h-18 w-30/100 flex p-2 border-b-2 mt-3`}>
                <h1 className={`text-5xl font-semibold pr-2 self-end mb-2`}>Blog Posts</h1>
                <h2 className={`text-base font-medium self-end mb-2 ml-1`}>(Recently Featured)</h2>
              </div>
            }
            {
              posts.map((post, index) => (
                <BlogPost
                key={ index }
                index={ index }
                preview={ previewMode }
                type={ post.type }
                id={ post.id } 
                status={ post.status } 
                title={ post.title }
                author={ post.author }
                date={ post.date }
                tags={ fakeTags } 
                image={ 
                  <div className={` ${ name }__blog-post--img-box 
                    ${ previewMode ? 
                      'h-40 w-25/100' : 
                      'h-30/100 self-center mb-4' }`}>
                    <Image 
                      previewMode={ previewMode }
                      image={ img } 
                    />
                  </div> 
                }
                content={ 
                  <div className={` ${ name }__blog-post--content-box
                      ${ previewMode ? 
                        'w-75/100 mr-6 border-b-2' : 
                        'w-80/100 m-auto'}
                  `}>
                    <div className={` mb-4
                      ${ previewMode ? 'w-full' : ''}`}>
                      { post.content }
                    </div>
                    <div className={`${ previewMode ? '' : 'text-center mb-6'}`}>
                      <Button 
                        arrow={ true }
                        text={`${ previewMode ? 'Read More' : 'Back to Blog'}`} 
                        clicked={ blogPostButtonHandler }
                      />
                    </div>
                  </div> 
                }>
              </BlogPost>
              ))
            }
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
