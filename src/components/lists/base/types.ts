export type ListProps = {
  parent: string;
  list: {
    title?: string;
    text?: string;
    link?: string;
  }[];
  hover?: boolean;
};