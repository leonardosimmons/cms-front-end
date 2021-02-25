import React from 'react';
import { AddTodoFormProps } from '../types';

import Element from '../../../../store/keys';
import Input from '../../../../components/input';
import Button from '../../../../components/buttons/BaseButton-01';


const AddTodoForm: React.FunctionComponent<AddTodoFormProps> = (
  { 
    title,
    note, 
    titleChange, 
    noteChange, 
    submitted 
  }
) => {
  return ( 
    <form className={`flex`} onSubmit={ submitted }>
      <div className={`flex justify-center items-center ml-3`}>
        <Input
          name={`${ Element.TITLE }__${ Element.INPUT }`}
          label={`Title:`}
          value={ title }
          changed={ titleChange }
          labelStyle={`mr-2`}
          inputStyle={`border-2 border-gray-300 border-solid w-36`}>
        </Input>
      </div>
      <div className={`flex justify-center items-center ml-3`}>
        <Input
          name={`${ Element.NOTE }__${ Element.INPUT }`}
          label={`Note:`}
          value={ note }
          changed={ noteChange }
          labelStyle={`mr-2`}
          inputStyle={`border-2 border-gray-300 border-solid mr-3 w-80`}>
        </Input>
      </div>
      <Button
        parent={ Element.TODO_SECTION }
        text={'Add'}>
      </Button>
    </form>
  );
};

export default AddTodoForm;