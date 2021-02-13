import React from 'react';
import { ButtonConfig } from '../../store/types';

const Button: React.FunctionComponent<ButtonConfig> = ({ parent, text, clicked, style }) => {
  return (
    <button 
      className={`${ parent }__button px-3 py-1 bg-green-300 rounded-lg`} 
      style={ style }
      onClick={ clicked } 
    >
      { text } 
    </button>
  );
};

export default Button;