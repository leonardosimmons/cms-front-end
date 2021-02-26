import React from 'react';
import Input from '../../../../components/input';
import Element from '../../../../store/keys';
import { FormProps } from '../../../../store/types/types';

const BlogSearchForm: React.FunctionComponent<FormProps> = ({ value, changed, submitted }) => 
{
  return (
    <form className={`flex flex-col justify-center items-center w-85/100 m-auto noselect`}
      onSubmit={ submitted }>
      <Input
        name={ Element.BLOG_SEARCH }
        label={ 'Blog Search' }
        type={ 'text '}
        value={ value }
        changed={ changed }
        button={ true }
        buttonIcon="&#x1F50D;"
        labelStyle={`item self-start text-xl font-semibold pb-2 mt-1`}
        inputStyle={`flex-auto border-gray-300 border-2 border-solid input-focus mb-4`}
        buttonStyle={`input-focus active-focus bg-gray-400 border-gray-200 border-2 border-solid mb-4`}>
      </Input>
    </form>
  );
};

export default BlogSearchForm;