import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App() {
  const todoItems = todosData.map(item => <TodoItem item={item}/>)

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
