import React from 'react';
import Element from '../../../../store/keys';
import SideBarContentBox from '../../../../components/boxes/content/sidebar';
import { BlogCategoryListProps } from '../types';
import { useDispatch } from 'react-redux';
import { search, setInquiry } from '../state';


const CategoryList: React.FunctionComponent<BlogCategoryListProps> = ({ tags, hover }): JSX.Element => {
  
  //*  ---------------------  STATE  -----------------------  *//
  const dispatch = useDispatch();

  //*  --------------------  HANDLERS  ---------------------  *//
  const searchTagHandler = (tag: string): void => {
    dispatch(setInquiry(tag));
    dispatch(search());
  };

  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <SideBarContentBox parent={ Element.BLOG_SECTION }>
      <div className={`w-85/100 flex flex-col justify-center items-center text-center m-auto`}>
        <h2 className={`text-xl font-semibold pb-2 mt-1 self-start`}>
          Blog Tags
        </h2>
        <ul className={`w-95/100 flex flex-wrap m-auto mb-3`}>
          {
            tags.map((tag, index) => 
            (
              <li 
                key={ index } 
                className={`flex-50 active-focus flex justify-center items-center
                ${ hover && 'hover-scale'}`}>
                <button className={`w-65/100 text-center`} onClick={ () => searchTagHandler(tag) }>
                  { tag }
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </SideBarContentBox>
  );
};

export default CategoryList;