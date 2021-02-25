//* -------------------  FORMS  ------------------- *//
export type FormProps = {
  value: string;
  changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitted: (e: React.FormEvent<HTMLFormElement>) => void;
}


//* -------------------  HTTP  ------------------- *//
/**
 * * Get Request [Basic]
 */
export type GetRequest = {
  url: string | string[];
  query?: string;
  headers?: {};
};
