import { PostDataToken } from '../../../store/types/post';
import { CarouselStatus } from './Carousel/types';
//*  --------------------  BLOG SEARCH  --------------------  *//
export type BlogSearch = {
  buffer: string;
  inquiry: string;
  result: PostDataToken[];
  isLoading: boolean;
  isError: boolean;
};

//*  --------------------  CATEGORY LIST  --------------------  *//
export type BlogCategoryListProps = {
  tags: string[];
  hover?: boolean;
}




//*  --------------------  BLOG SECTION  --------------------  *//
export type BlogSectionProps = {
  parent: string;
}


export type BlogSectionConfig = {
  previewMode: boolean;
  search: BlogSearch;
  blogs: {
    bank: PostDataToken[];
    current: PostDataToken[];
    tags: string[];
  }
  carousel: CarouselStatus;
};


