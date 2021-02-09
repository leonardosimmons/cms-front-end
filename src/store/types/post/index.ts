/**
 * * -----------------------  STORE  -----------------------
 */

/**
 * * Post token
 */
export type Post = {
  id: number;
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
 * * Type for storage of Post tokens
 */
export type PostBank = {
  bank: Post[];
  isLoading: boolean
};


/**
 * * Blog Post
 */
export type BlogPost = {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  tags: string;
  commentCount: number;
  status: string;
};