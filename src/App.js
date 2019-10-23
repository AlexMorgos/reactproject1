import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos=prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.compeleted = !todo.compeleted
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
  }
}

export default App;
