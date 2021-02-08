import React from 'react';

type ListProps = {
  name: string;
  list: {
    text: string;
    link?: string;
  }[];
};

const List: React.FunctionComponent<ListProps> = ({ name, list }) => {
  return (
    <ul className={`${ name }__list`}>
      { list.map((item, index) => (
        <li className={`
          ${ name }__list--item 
          ${ name }__list--item-${ index + 1 }`} 
          key={ index }
        >
          <a className={`
            ${ name }__list--text 
            ${ name }__list--text-${ index + 1 }`}
            href={ item.link || '#' }
          >
            { item.text }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;