export type ButtonConfig = {
  text: string;
  parent?: string;
  clicked?: () => void;
  style?: {
    color: string,
    backgroundColor: string
  };
  arrow?: boolean
};
