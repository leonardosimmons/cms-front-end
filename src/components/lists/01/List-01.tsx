import React from 'react';

type ListProps = {
  name: string;
  list: {
    link: string;
    text: string;
  }[];
};

const List: React.FunctionComponent<ListProps> = ({ name, list }) => {
  return (
    <ul className={`list-01 ${ name }__list`}>
      { list.map((item, index) => (
        <li className={`list-01__item ${ name }__list--item`} 
          key={ index }
        >
          <a className={`list-01__text ${ name }__list--text`}
            href={ item.link }
          >
            { item.text }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;