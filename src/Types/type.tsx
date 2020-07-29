import { ReactNode } from 'react';

export type Todo = {
  text: string;
};

export type TodoState = {
  todo: Todo[];
};

export type TodoActions = {
  type: string;
  payload: Todo;
};

export type ProviderProps = {
  children: ReactNode;
};
