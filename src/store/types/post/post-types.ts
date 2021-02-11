/**
 * * -----------------------  STORE  -----------------------
 */

/**
 * * Post Data token
 */
export type PostDataToken = {
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
 * * Type for storage of Post Data tokens
 */
export type PostDataBank = {
  bank: PostDataToken[];
  isLoading: boolean
};


/**
 * * -----------------------  BASE   ------------------------
 */
/**
 * * Information pertaining to the selected post
 */
export type PostInfo = {
  id: number;
  tags: string[];
  status: string;
  categoryId: number;
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
};

/**
 * * A complete Post
 */
export type Post = PostInfo & PostContent;


/**
 * * ---------------------  CONFIGS   ----------------------
 */

/**
 * * Blog Post
 */
export type BlogPostConfig = {
  preview: boolean;
  parent: string;
  index?: number;
};

/**
 * * A complete blog post
 */
export type BlogPost = BlogPostConfig & Post;