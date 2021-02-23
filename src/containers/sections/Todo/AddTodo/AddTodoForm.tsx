import React from 'react';
import { FormProps } from '../../../../store/types';
import Button from '../../../../components/buttons/BaseButton-01';
import Element from '../../../../store/keys';



const AddTodoForm: React.FunctionComponent<FormProps> = ({ value, changed, submitted }) =>
{
  return ( 
    <form className={`flex`} onSubmit={ submitted }>
      <div>
        <label htmlFor="title">
          Title: 
        </label>
        <input id="title" type="text" />
      </div>
      <div>
        <label htmlFor="note">
          Note: 
        </label>
        <input id="note" type="text" />
      </div>
      <Button
        parent={ Element.TODO_SECTION }
        text={ 'ADD'}>
      </Button>
    </form>
  );
};