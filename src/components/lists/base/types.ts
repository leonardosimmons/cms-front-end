export type ListConfig = {
  parent: string;
  list: {
    title?: string;
    text?: string;
    link?: string;
  }[];
  hover?: boolean;
};