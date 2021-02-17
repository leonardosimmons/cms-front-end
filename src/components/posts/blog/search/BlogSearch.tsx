import React, { useState, useRef, FormEvent } from 'react';


const BlogSearch: React.FunctionComponent = (): JSX.Element  => {
  const inputRef = useRef('');
  const [ value, setValue ] = useState<string>();

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const current = inputRef.current
    console.log(current);
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
    console.log(value);
  }
  
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
            value={ value }
            onChange={ handleInputChange }
            className={`flex-auto border-gray-300 border-2 border-solid input-focus`}  
          />
          <button className={`input-focus active-focus bg-gray-400 border-gray-200 border-2 border-solid`}>
            &#x1F50D;
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogSearch;