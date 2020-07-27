import React from 'react';
import { TodoProvider } from './context/globalState';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div >
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
