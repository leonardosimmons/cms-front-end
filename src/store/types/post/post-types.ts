/**
 * * -----------------------  STORE  -----------------------
 */

/**
 * * Post Data token
 */
export type PostDataToken = {
  id: number;
  type: string;
  categoryId: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  tags: string;
  commentCount: number;
  status: string;
};

/**
 * * Type for storage of Post Data tokens
 */
export type PostDataBank = {
  bank: PostDataToken[];
  isLoading: boolean;
  completed: boolean;
};


/**
 * * -----------------------  BASE   ------------------------
 */
/**
 * * Information pertaining to the selected post
 */
export type PostInfo = {
  id: number;
  type: string;
  tags: string | string[];
  status: string;
  categoryId?: number;
  commentCount?: number;
};

/**
 * * Content types that make up a post 
 */
export type PostContent = {
  title: string;
  author: string;
  date: string;
  content?: JSX.Element;
  image?: JSX.Element;
  button?: JSX.Element;
};

/**
 * * Optional Post configurations
 */

export type PostConfig = {
  type?: string;
  index?: number;
  parent?: string;
  preview?: boolean;
};

export type Post = PostConfig & PostInfo & PostContent;
