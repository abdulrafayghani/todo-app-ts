import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/globalState';

export const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [todoItem, setTodoItem] = useState<string>('');

  const addItem = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: {
        text: todoItem,
      },
    });
    setTodoItem('');
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: 'lobster',
          color: 'purple',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Welcome to Todo App
      </h1>
      <form style={{display:'flex', justifyContent:'center'}}
        onSubmit={(e) => {
          addItem(e);
        }}
      >
        <div className="input-group mb-3">
          <input
            className="form-control"          
            type="text"
            required
            placeholder="Enter todo"
            onChange={(ev) => { setTodoItem(ev.target.value) }}
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-success"
              type="button"
            >
              Add todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
