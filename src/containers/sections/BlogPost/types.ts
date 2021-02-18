import { PostDataToken } from '../../../store/types/post';
import { CarouselStatus } from './Carousel/types';

export type BlogSectionProps = {
  parent: string;
}

export type BlogSearch = {
  buffer: string;
  inquiry: string;
  result: PostDataToken[];
};

export type BlogSectionConfig = {
  previewMode: boolean;
  search: BlogSearch;
  blogs: {
    bank: PostDataToken[];
    current: PostDataToken[];
  }
  carousel: CarouselStatus;
};
