import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';
import { TodoState, Actions, ProviderProps } from '../Types/type';

const initialState: TodoState = {
  todo: []
};

export const TodoContext = createContext<{ state: TodoState; dispatch: React.Dispatch<Actions>;}>({ state: initialState, dispatch: () => null });

export const TodoProvider = (props: ProviderProps) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
