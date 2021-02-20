import React from 'react';
import { ListConfig } from './types';
import Element from '../../../store/keys/elements';


const List: React.FunctionComponent<ListConfig> = ({ parent, list, hover}): JSX.Element => {

  return (
    <ul className={`${ parent }__list 
      flex
      ${ parent === Element.MAIN_NAVBAR ? 'ml-5' : '' }`}>
      { list.map((item, index) => (
        <li className={`${ parent }__list--item
            p-5 h-full active-focus
            ${ hover && 'hover-scale'} `}
          key={ index }
        >
          <a className={`${ parent }__list--text 
            no-underline`}
            href={ item.link || '#' } 
          >
            { item.title || item.text }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;