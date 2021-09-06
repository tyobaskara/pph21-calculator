import React from 'react'

export type TextEvent  = React.ChangeEvent<HTMLInputElement>;
export type SelectEvent  = React.ChangeEvent<HTMLSelectElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;
export type State = {
  annualIncome: string;
  taxRelief: string;
  annualTaxIncome: string;
  narratives: string[];
  showResult: boolean;
};
export type SetState = React.Dispatch<React.SetStateAction<State>>;