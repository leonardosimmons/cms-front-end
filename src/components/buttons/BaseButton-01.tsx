import React from 'react';
import { ButtonConfig } from './types';


const Button: React.FunctionComponent<ButtonConfig> = ({ parent, text, clicked, style, arrow }) => {
  return (
    <button 
      className={`${ parent }__button px-3 py-1 bg-green-300 rounded-lg relative btn-hoverConfig btn-ActiveFocus`} 
      style={ style }
      onClick={ clicked } 
    >
      { text } {arrow ? <div className={`inline-block`}>&#10132;</div> : ''}
    </button>
  );
};

export default Button;