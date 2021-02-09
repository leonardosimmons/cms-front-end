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
 * * -----------------------  BLOG  ------------------------
 */


/**
 * * Information pertaining to the selected blog post
 */
export type BlogPostData = {
  id?: number;
  categoryId?: number;
  tags?: string;
  commentCount?: number;
  status?: string;
};

/**
 * * Content types that make up a blog post 
 */
export type BlogPostContent = {
  id?: number;
  title?: string;
  author?: string;
  date?: string;
  image?: string;
  content?: string;
};

/**
 * * Extra configurations
 */
export type BlogPostConfig = {
  preview: boolean;
  parent: string;
  index?: number;
};

/**
 * * A complete blog post
 */
export type BlogPost = BlogPostConfig & BlogPostData & BlogPostContent;