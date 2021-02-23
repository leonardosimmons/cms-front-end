import React from 'react';

export type InputProps = {
  name: string;
  label: string;
  value: string | number;
  type?: string;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  button?: boolean;
  labelStyle?: string;
  inputStyle?: string;
  buttonIcon?: string;
  buttonStyle?: string;
  buttonClicked?: () => void;
};
