import React from 'react';
import Element from '../../../../store/keys/elements';
import SideBarContentBox from '../../../../components/boxes/content/sidebar';
import TagsList from '../../../../components/lists/base';


const CategoryList: React.FunctionComponent = (): JSX.Element => {
  //*  ----------------------  STATE  ----------------------  *//


  //*  ---------------------  RENDER  ---------------------  *//
  return (
    <SideBarContentBox parent={ Element.BLOG_SECTION }>

    </SideBarContentBox>
  );
};

export default CategoryList;
