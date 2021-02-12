import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../store/store';

import Element from '../../../store/keys/elements';
import img from '../../../assets/images/logo.png';
import NavigationBar from '../../../components/navbar/main';
import BlogPost from '../../../components/posts/blog';


const Home: React.FunctionComponent = () => {
  const posts = useSelector((state: RootState) => state.posts.bank[0] || '');

  const fakeTags = ['apples', 'oranges', 'bananas', 'pears'];

  return (
    <div id="home-page" className={`rounded h-full max-w-full`}>
      <div id="main-container" className={`h-full w-full flex flex-col rounded-3xl bg-red-200`}>
        <NavigationBar />
        <div id="body" className={`flex-auto flex`}>
          <div id="content" className={`flex-auto flex rounded-bl-3xl justify-center items-center`}>
            <div className={`h-9/10 w-9/10 flex justify-center items-center border-white border-2 border-solid`}>
              <BlogPost
                type={ Element.BLOG_POST }
                preview={ false }
                id={ posts.id } 
                categoryId={ posts.categoryId } 
                tags={ fakeTags } 
                status={ posts.status } 
                commentCount={ posts.commentCount }
                title={ posts.title }
                author={ posts.author }
                date={ posts.date }
                image={ <div><img src={ img } alt="" /></div> }
                content={ <div>Test 456</div> }>
              </BlogPost>
            </div>
          </div>
          <div id="side-bar" className={`flex-3rd rounded-br-3xl bg-green-900`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
