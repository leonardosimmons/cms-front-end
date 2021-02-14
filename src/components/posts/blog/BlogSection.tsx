import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import BlogPost from './BlogPost';
import Image from '../../boxes/img/ImageBox';
import img from '../../../assets/svg/undraw_Collaboration_re_vyau.svg';
import Button from '../../buttons/BaseButton-01';

type BlogSectionProps = {
  parent: string;
  currentViewMode: (status: boolean) => void;
}

const BlogSection: React.FunctionComponent<BlogSectionProps> = ({ parent, currentViewMode }): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//
  const viewMode = useRef(true);
  const posts = useSelector((state: RootState) => state.posts.bank || '');
  
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
    { posts.map((post, index) => (
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
                image={ img }>
              </Image>
            </div> 
          }
          content={ 
            <div className={` ${ parent }__blog-post--content-box
                ${ viewMode.current ? 
                  'w-75/100 mr-6 border-b-2' : 
                  'w-80/100 m-auto'}
            `}>
              <div className={` mb-4
                ${ viewMode.current ? 'w-full' : ''}`}>
                { post.content }
              </div>
              <div className={`${ viewMode.current ? '' : 'text-center mb-6'}`}>
                <Button 
                  arrow={ true }
                  text={`${ viewMode.current ? 'Read More' : 'Back to Blog'}`} 
                  clicked={ buttonHandler }>
                </Button>    
              </div>
            </div> 
          }>
        </BlogPost>
      ))}
    </>
  );
};

export default BlogSection;
