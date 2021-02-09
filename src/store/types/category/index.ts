/**
 * * [Base] Category token
 */
export type Category = {
  id: number;
  title: string;
  link?: string;
};


/**
 * * Type for storage of Category tokens
 */
export type CategoryBank = {
  bank: Category[];
  isLoading: boolean;
};
