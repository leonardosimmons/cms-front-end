import React from 'react';
import { PostDataToken } from '../../../store/types/post';
import { FormProps } from '../../../store/types/types';
import { CarouselStatus } from './Carousel/types';
//*  --------------------  BLOG SEARCH  --------------------  *//
export type BlogSearch = {
  buffer: string;
  inquiry: string;
  result: PostDataToken[];
  isLoading: boolean;
  isError: boolean;
};

export type BlogSearchFormProps = FormProps;
//*  --------------------  CATEGORY LIST  --------------------  *//
export type BlogCategoryListProps = {
  tags: string[];
  hover?: boolean;
}


//*  --------------------  BLOG SECTION  --------------------  *//
export type BlogSectionProps = {
  parent: string;
}


export type BlogSectionContext = {
  previewMode: boolean;
  search: BlogSearch;
  blogs: {
    bank: PostDataToken[];
    current: PostDataToken[];
    tags: string[];
  }
  carousel: CarouselStatus;
};
