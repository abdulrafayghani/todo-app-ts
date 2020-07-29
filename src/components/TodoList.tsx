import React, { useContext } from 'react';
import { TodoContext } from '../context/globalState';
import { Todo } from '../Types/type';

export const TodoList = () => {
  const {
    state: { todo },
    dispatch,
  } = useContext(TodoContext);
  console.log(todo);
  const deleteTodo = (item: Todo) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: item,
    });
  };
  return (
    <div >
      {/* <a href="#" className="list-group-item list-group-item-action"> */}
      {todo.map((item: Todo, index: number) => (
        <div className="list-group" key={index}>
          <a href="#" className="list-group-item list-group-item-action">
            {/* <li > */}
            <span>{item.text}</span>
            <button className="btn btn-outline-dark" onClick={() => deleteTodo(item)}>X</button>
            {/* </li> */}
          </a>
        </div>
      ))}
      {/* </a> */}

      {/* </ul> */}
    </div>
  );
};
