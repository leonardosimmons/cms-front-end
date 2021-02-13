//* -------------------  HTTP  ------------------- *//
/**
 * * Get Request [Basic]
 */
export type GetRequest = {
  url: string | string[];
  headers?: {};
};


//* ------------------  BUTTONS  ----------------- *//
export type ButtonConfig = {
  text: string;
  parent?: string;
  clicked?: () => void;
  style?: {
    color: string,
    backgroundColor: string
  };
};