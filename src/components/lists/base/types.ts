export type ListConfig = {
  name: string;
  list: {
    title?: string;
    text?: string;
    link?: string;
  }[];
  hover?: boolean;
};