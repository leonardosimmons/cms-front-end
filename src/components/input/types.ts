import React from 'react';

export type InputProps = {
  name: string;
  value: string | number;
  label?: string;
  labelTwo?: string;
  type?: string;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter?: () => void;
  reset?: () => void;
  button?: boolean;
  btnStyle?: string;
  labelStyle?: string;
  labelTwoStyle?: string;
  inputStyle?: string;
  buttonIcon?: string;
  buttonStyle?: string;
  buttonClicked?: () => void;
};
