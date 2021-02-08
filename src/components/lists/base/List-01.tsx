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
    <ul className={`list-01 ${ name }__list-01`}>
      { list.map((item, index) => (
        <li className={`
          list-01__item 
          ${ name }__list-01--item 
          ${ name }__list-01--item-${ index + 1 }`} 
          key={ index }
        >
          <a className={`
            list-01__text 
            ${ name }__list-01--text 
            ${ name }__list-01--text-${ index + 1 }`}
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