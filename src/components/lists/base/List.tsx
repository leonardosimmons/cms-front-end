import React from 'react';
import { ListConfig } from './types';


const List: React.FunctionComponent<ListConfig> = ({ name, list, hover}): JSX.Element => {
  return (
    <ul className={`${ name }__list flex ml-5`}>
      { list.map((item, index) => (
        <li 
          className={`${ name }__list--item p-5 h-full active-focus ${ hover && 'hover-scale'}`}
          key={ index }
        >
          <a 
            className={`${ name }__list--text no-underline`}
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