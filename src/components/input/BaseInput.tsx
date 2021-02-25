import React from 'react';
import { InputProps } from './types';

const Input: React.FunctionComponent<InputProps> = ({ name , label, value, type, changed, labelStyle, inputStyle, button, buttonIcon, buttonStyle, buttonClicked }): JSX.Element => 
{
  return (
    <>
      <label 
        htmlFor={ name }
        className={ labelStyle }
      >
        { label }
      </label>
      <div className={`
        w-full
        ${ button ? 'flex' : '' }`}>
        <input 
          id={ name } 
          type={ type ? type : 'text' }
          value={ value }
          className={`${ inputStyle } px-1` }
          onChange={ changed }
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
    </>
  );
};

export default Input;