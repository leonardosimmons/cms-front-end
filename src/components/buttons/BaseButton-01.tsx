import React from 'react';
import { ButtonConfig } from '../../store/types';

type Test = ButtonConfig & { arrow?: boolean };

const Button: React.FunctionComponent<Test> = ({ parent, text, clicked, style, arrow }) => {
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