import { Post } from '../../../store/types/post';

//*  -------------------------  STATE  ------------------------  *//
export type BlogPostStatus = {
  bank: Post[];
  current: Post;
  currentSet: Post[];
  buffer?: Post | Post[];
};

export type BlogSectionProps = {
  parent: string;
  currentViewMode: (status: boolean) => void;
}

//*  ------------------------  CONENT  -----------------------  *// 
export type BlogContentBlockProps = {
  previewMode: boolean;
  content: string;
  btnArrow: boolean;
  btnText: string;
  btnClickHandler: () => void;
}

export type BlogContentBoxProps = {
  parent: string;
  previewMode: boolean;
}

export type BlogImageBoxProps = {
  parent: string;
  previewMode: boolean;
}
