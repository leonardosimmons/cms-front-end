export type ButtonProps = {
  text: string;
  parent?: string;
  clicked?: () => void;
  style?: {
    color: string,
    backgroundColor: string
  };
  arrow?: boolean
  classes?: string;
};
