import React from 'react';
import { InputProps } from './types';
import Button from '../buttons/BaseButton-01';
import Element from '../../store/keys';

const Input: React.FunctionComponent<InputProps> = (
  { 
    name , 
    label, 
    value, 
    type,
    filter,
    reset, 
    changed, 
    labelStyle, 
    inputStyle, 
    button, buttonIcon, buttonStyle, buttonClicked 
  }
): JSX.Element => {
  return (
    <>
      {
        name !== Element.TODO_FILTER && 
          <label 
            htmlFor={ name }
            className={ labelStyle }
            >
              { label }
          </label>
      }
      <div className={`
        w-full

        ${ button ? 'flex' : '' }`}>
        <input 
          id={ name } 
          type={ type ? type : 'text' }
          value={ value }
          className={`${ inputStyle } px-1` }
          onChange={ changed }
          maxLength={ name === Element.WEATHER_WIDGET + '_alt-input' ? 2 : undefined }
        />
        {
          button &&
          <button 
            type="submit"
            className={ buttonStyle }
            onClick={ buttonClicked }
          >
            { buttonIcon }
          </button>
        }
      </div>
      {
        name === Element.TODO_FILTER &&
        <>
          <Button
            parent={ Element.TODO_FILTER}
            text={'Filter'}
            clicked={  filter }
            classes={ buttonStyle }>  
          </Button>
          <Button
            parent={ Element.TODO_FILTER}
            text={'Reset'}
            clicked={  reset }
            classes={ buttonStyle }>  
          </Button>
        </>
        
      }
    </>
  );
};

export default Input;