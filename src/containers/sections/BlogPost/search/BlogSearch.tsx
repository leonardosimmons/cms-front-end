import React from 'react';
import { RootState } from '../../../../store';
import { setInquiry, setBuffer } from '../state';
import { useSelector, useDispatch } from 'react-redux';
import { BlogSearch as BlogSearchStatus } from '../types';


const BlogSearch: React.FunctionComponent = (): JSX.Element  => {
  
  //*  ----------------------  STATE  ----------------------  *//  
  const dispatch = useDispatch(); 
  const search: BlogSearchStatus = useSelector((state: RootState) => state.blogSection.search);

  //*  --------------------  HANDLERS  --------------------  *//
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => 
  {
    dispatch(setBuffer(e.target.value));
  }

  const resetInputHandler = (): void => 
  {
    dispatch(setBuffer(''));
  }

  const formSubmitHandler = (e: React.FormEvent): void => 
  {
    e.preventDefault();
    const inquiry = search.buffer;
    dispatch(setInquiry(inquiry));
    resetInputHandler();
  }
  
  
  //*  ---------------------  RENDER  ---------------------  *//  
  return (
    <div className={`search h-28 w-95/100 bg-gray-100 mx-auto mt-4 rounded p-2 border-gray-200 border-2 border-solid`}>
      <form className={`flex flex-col justify-center items-center w-85/100 m-auto`}
        onSubmit={ formSubmitHandler }>
        <label htmlFor="blog-search-input"
          className={`item self-start text-xl font-semibold pb-2`}
        >
          Blog Search
        </label>
        <div className={`flex w-full`}>
          <input 
            id="blog-search-input" 
            type="text"
            value={ search.buffer }
            onChange={ inputChangeHandler }
            className={`flex-auto border-gray-300 border-2 border-solid input-focus`}  
          />
          <button 
            type="submit"
            className={`input-focus active-focus bg-gray-400 border-gray-200 border-2 border-solid`}
          >
            &#x1F50D;
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogSearch;
