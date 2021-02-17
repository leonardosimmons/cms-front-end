import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { BlogPosts } from '../../../components/posts/blog/state';
import { BlogSectionProps } from '../../../components/posts/blog/types';

import BlogPost from '../../../components/posts/blog/BlogPost';
import Image from '../../../components/boxes/img/ImageBox';
import Button from '../../../components/buttons/BaseButton-01';
import Carousel from './Carousel';


const BlogSection: React.FunctionComponent<BlogSectionProps> = ({ parent, currentViewMode }): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const viewMode = useRef(true);
  const blogPosts = useSelector(BlogPosts);
  
  const fakeTags = ['apples', 'oranges', 'bananas', 'pears'];

  //*  --------------------  HANDLERS  --------------------  *//
  const buttonHandler = (): void => {
    const current = viewMode.current;
    viewMode.current = !current;
    currentViewMode( viewMode.current );
  };

  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <>
      { 
      viewMode.current && 
        <div className={`h-18 w-40/100 flex p-2 border-b-2 mt-3 self-start ml-12`}>
          <h1 className={`text-5xl font-semibold pr-2 self-end mb-2`}>Blog Posts</h1>
          <h2 className={`text-base font-medium self-end mb-2 ml-1`}>(Recently Featured)</h2>
        </div>
      }
    <div className={`overflow-hidden mx-6`}>
      <div className={`transition-all duration-700
        ${ viewMode.current ? 'h-25r' : 'h-full'} flex `}>
        <Carousel
          autoPlay={ 6 }
          previewMode={ viewMode.current} 
        >
          { 
            blogPosts.currentSet.map((post, index) => (
              <BlogPost
                key={ index }
                index={ index }
                preview={ viewMode.current }
                type={ post.type }
                id={ post.id } 
                status={ post.status } 
                title={ post.title }
                author={ post.author }
                date={ post.date }
                tags={ fakeTags } 
                image={ 
                  <div className={` ${ parent }__blog-post--img-box 
                  ${ viewMode.current ? 
                    'h-40 w-25/100' : 
                    'h-30/100 self-center mb-4' }`}>
                      <Image 
                        previewMode={ viewMode.current }
                        image={ process.env.PUBLIC_URL + post.image }>
                      </Image>
                  </div> 
                }
                content={ 
                  <div className={` ${ parent }__blog-post--content-box
                  ${ viewMode.current ? 
                    'w-75/100 mr-6 ' : 
                    'w-80/100 m-auto'}
                    `}>
                    <div className={` mb-4
                      ${ viewMode.current ? 'w-full mb-4' : 'mb-6'}`}>
                      { post.content }
                    </div>
                    <div className={`${ viewMode.current ? '' : 'text-center mb-12'}`}>
                      <Button 
                        arrow={ true }
                        text={`${ viewMode.current ? 'Read More' : 'Back to Blog'}`} 
                        clicked={ buttonHandler }>
                      </Button>    
                    </div>
                  </div> 
                }>
              </BlogPost>
            ))
          }
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default BlogSection;
