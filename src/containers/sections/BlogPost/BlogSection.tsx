import React, { useEffect } from 'react';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { BlogSectionProps, BlogSectionContext } from './types';
import { toggleViewMode, updateCurrentBlogList, 
          resetCurrentBlogList, resetCarouselPosition, setTags } from './state';
import { PostDataToken } from '../../../store/types/post';
import { useGetTags } from '../../../helpers/hooks/useGetTags';


import Element, { Numbers as Config } from '../../../store/keys';
import BlogPost from '../../../components/posts/blog/BlogPost';
import Image from '../../../components/boxes/img/ImageBox';
import Button from '../../../components/buttons/BaseButton-01';
import Carousel from './Carousel';


const BlogSection: React.FunctionComponent<BlogSectionProps> = ({ parent }): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const dispatch = useDispatch();
  const context: BlogSectionContext = useSelector((state: RootState) => state.blogSection);
  

  //*  --------------------  BLOG TAGS  --------------------  *//
  const blogTags: string[] = useGetTags(context.blogs.bank);
  useEffect(() => 
  {
    dispatch(setTags(blogTags));
  }, [ dispatch, blogTags ]);

  
  //*  --------------------  HANDLERS  --------------------  *//
  const viewModeToggle = (post: PostDataToken): void => 
  { 
    dispatch(toggleViewMode());
    if (context.previewMode)
    {
      dispatch(updateCurrentBlogList([post]));
    } else {
        dispatch(resetCurrentBlogList());
    }
    dispatch(resetCarouselPosition());
  };

  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <>
      { 
      context.previewMode && 
        <div className={`h-18 w-30/100 flex p-2 border-b-2 mt-3 self-start ml-12`}>
          <h1 className={`text-4xl font-semibold pr-2 self-end mb-2`}>Blog Posts</h1>
          <h2 className={`text-base font-medium self-end mb-2 ml-1`}>(Recently Featured)</h2>
        </div>
      }
    <div className={`overflow-hidden mx-6`}>
      <div className={`transition-all duration-700
        ${ context.previewMode ? 'h-25r' : 'h-full'} flex`}>
        <Carousel
          autoPlay={ context.search.inquiry ? Config.AUTOPLAY_OFF : 
                      context.previewMode ? Config.CAROUSEL_AUTOPLAY_DEFAULT : Config.AUTOPLAY_OFF }
          previewMode={ context.previewMode }
        >
          { 
            context.blogs.current.map((post, index) => (
              <BlogPost
                key={ index }
                index={ index }
                preview={ context.previewMode }
                type={ post.type }
                id={ post.id } 
                status={ post.status } 
                title={ post.title }
                author={ post.author }
                date={ post.date }
                tags={ post.tags } 
                image={ 
                  <div className={` ${ parent }__blog-post--img-box 
                  ${ context.previewMode ? 
                    'h-40 w-25/100' : 
                    'h-30/100 self-center mb-4' }`}>
                      <Image 
                        previewMode={ context.previewMode }
                        image={ process.env.PUBLIC_URL + post.image }>
                      </Image>
                  </div> 
                }
                content={ 
                  <div className={` ${ parent }__blog-post--content-box
                  ${ context.previewMode ? 
                    'w-75/100 mr-6 ' : 
                    'w-80/100 m-auto'}
                    `}>
                    <div className={` mb-4
                      ${ context.previewMode ? 'w-full mb-4' : 'mb-6'}`}>
                      { post.content }
                    </div>
                    <div className={`${ context.previewMode ? '' : 'text-center mb-12'}`}>
                      <Button 
                        parent={ Element.BLOG_SECTION }
                        arrow={ true }
                        text={`${ context.previewMode ? 'Read More' : 'Back to Blog'}`} 
                        clicked={ () => viewModeToggle(post) }>
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
 