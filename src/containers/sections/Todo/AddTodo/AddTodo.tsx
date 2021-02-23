import React from 'react';
import Element from '../../../../store/keys';
import BaseButton from '../../../../components/buttons/BaseButton-01';

const AddTodo: React.FunctionComponent = (): JSX.Element => 
{
  const addTodoHandler = () => {
    
  };

  return (
    <form className={`flex`}>
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
      <BaseButton
        parent={ Element.TODO_SECTION }
        text={ 'ADD'}
        clicked={ addTodoHandler }>
      </BaseButton>
    </form>
  );
};

export default AddTodo;
