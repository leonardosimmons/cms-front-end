import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setInquiry, setBuffer, search as searchBlogs, resetCarouselPosition, clearCache, error } from '../state';
import { BlogSearch as BlogSearchStatus } from '../types';
import SideBarContentBox from '../../../../components/boxes/content/sidebar';
import Element from '../../../../store/keys/elements';


const BlogSearch: React.FunctionComponent = (): JSX.Element  => 
{
  
  //*  ----------------------  STATE  ----------------------  *//  
  const dispatch = useDispatch(); 
  const search: BlogSearchStatus = useSelector((state: RootState) => state.blogSection.search);

  //*  --------------------  HANDLERS  --------------------  *//
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => 
  {
    dispatch(setBuffer(e.target.value));
  };

  const resetInputHandler = (): void => 
  {
    dispatch(setBuffer(''));
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => 
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
      resetInputHandler();
    } 
  };
  
  
  //*  ---------------------  RENDER  ---------------------  *//  
  return (
    <SideBarContentBox parent={ Element.BLOG_SECTION }>
      <form className={`flex flex-col justify-center items-center w-85/100 m-auto`}
        onSubmit={ formSubmitHandler }>
        <label htmlFor="blog-search-input"
          className={`item self-start text-xl font-semibold pb-2 mt-1`}
        >
          Blog Search
        </label>
        <div className={`flex w-full`}>
          <input 
            id="blog-search-input" 
            type="text"
            value={ search.buffer }
            onChange={ inputChangeHandler }
            className={`flex-auto border-gray-300 border-2 border-solid input-focus mb-4`}  
          />
          <button 
            type="submit"
            className={`input-focus active-focus bg-gray-400 border-gray-200 border-2 border-solid mb-4`}
          >
            &#x1F50D;
          </button>
        </div>
      </form>
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