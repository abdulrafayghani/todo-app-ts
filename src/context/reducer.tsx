import { TodoState, TodoActions } from '../Types/type';

export const Reducer = (state: TodoState, action: TodoActions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    case 'DELETE_TODO':
      return {
        todo: [
          ...state.todo.filter((item) => item !== action.payload),
        ],
      };
    default:
      return state;
  }
};
