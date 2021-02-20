import { PostDataToken } from '../../../store/types/post';
import { CarouselStatus } from './Carousel/types';

export type BlogSectionProps = {
  parent: string;
}

export type BlogSearch = {
  buffer: string;
  inquiry: string;
  result: PostDataToken[];
  isLoading: boolean;
  isError: boolean;
};

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
