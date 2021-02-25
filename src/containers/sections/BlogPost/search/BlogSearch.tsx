import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { 
  setInquiry, setBuffer, search as searchBlogs, 
  resetCarouselPosition, clearCache, clearBuffer, error } from '../state';
import { BlogSearch as BlogSearchStatus } from '../types';
import BlogSearchForm from './BlogSearchForm';
import SideBarContentBox from '../../../../components/boxes/content/sidebar';
import Element from '../../../../store/keys';


const BlogSearch: React.FunctionComponent = (): JSX.Element  => 
{
  
  //*  ----------------------  STATE  ----------------------  *//  
  const dispatch = useDispatch(); 
  const search: BlogSearchStatus = useSelector((state: RootState) => state.blogSection.search);

  //*  --------------------  HANDLERS  --------------------  *//
  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => 
  {
    dispatch(setBuffer(e.target.value));
  }, [ dispatch ]);

  const formSubmitHandler = useCallback((e: React.FormEvent<HTMLFormElement>): void => 
  {
    e.preventDefault();
    dispatch(clearCache());
    if(search.isError) 
      dispatch(error());

    const inquiry = search.buffer;
    dispatch(setInquiry(inquiry));
    dispatch(searchBlogs());

    if (!search.isError) 
    {
      dispatch(resetCarouselPosition());
      dispatch(clearBuffer());
    } 
  }, [ dispatch, search.buffer, search.isError ]);
  
  
  //*  ---------------------  RENDER  ---------------------  *//  
  return (
    <SideBarContentBox parent={ Element.BLOG_SECTION }>
      <BlogSearchForm
        value={ search.buffer }
        changed={ inputChangeHandler }
        submitted={ formSubmitHandler }>
      </BlogSearchForm>
      { 
        search.isError &&
          <div className={` text-red-800 text-sm font-bold mb-3 ml-8`}>
            {`Error: Could not find search, please try again` }
          </div> 
      }
    </SideBarContentBox>
  );
};

export default BlogSearch;
