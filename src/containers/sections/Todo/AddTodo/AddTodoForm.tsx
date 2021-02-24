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
      <div>
        <Input
          name={`${ Element.TITLE }__${ Element.INPUT }`}
          label={`Title:`}
          value={ title }
          changed={ titleChange }>
        </Input>
      </div>
      <div>
        <Input
          name={`${ Element.NOTE }__${ Element.INPUT }`}
          label={`Note:`}
          value={ note }
          changed={ noteChange }>
        </Input>
      </div>
      <Button
        parent={ Element.TODO_SECTION }
        text={ 'Add'}>
      </Button>
    </form>
  );
};

export default AddTodoForm;