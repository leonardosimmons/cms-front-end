import { Post, PostDataToken } from '../../../store/types/post';

//*  -------------------------  STATE  ------------------------  *//
export type BlogPostStatus = {
  bank: PostDataToken[];
  current: Post;
  currentSet: PostDataToken[];
  buffer?: Post | Post[];
};

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
