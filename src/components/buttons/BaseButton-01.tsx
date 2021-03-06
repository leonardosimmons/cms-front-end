import React from 'react';
import { ButtonProps } from './types';


const Button: React.FunctionComponent<ButtonProps> = ({ parent, text, clicked, style, arrow, classes }) => {
  return (
    <button 
      type="submit"
      className={`${ parent }__button ${ classes }
      px-3 py-1 rounded-lg relative btn-hoverConfig btn-ActiveFocus bg-green-300
      ${ parent === 'blog-section' ? 'bg-green-300' : ''}
      ${ parent === 'todo-section' ? 'bg-green-300' : ''}`} 
      style={ style }
      onClick={ clicked } 
    >
      { text } {arrow ? <div className={`inline-block`}>&#10132;</div> : ''}
    </button>
  );
};

export default Button;