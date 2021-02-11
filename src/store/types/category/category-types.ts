/**
 * * [Base] Category token
 */
export type CategoryDataToken = {
  id: number;
  title: string;
  link?: string;
};


/**
 * * Type for storage of Category tokens
 */
export type CategoryDataBank = {
  bank: CategoryDataToken[];
  isLoading: boolean;
};
