import React from 'react';
import './App.css';
import logo from './logo.svg';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         todos: []
      }
   }


   addTodoItem = todo => {
      this.setState({
         todos: [...this.state.todos, todo]
      });
   }

   removeTodoItem = todoToDelete => {
      let newTodos = this.state.todos.filter(todo => todo !== todoToDelete);

      this.setState({ todos: newTodos });
   }

   render() {
      console.log(this.state);
      return (
         <div className="container mt-3 text-center">
            <img src={logo} className="App-logo" alt="logo" width="120px" height="120px"/>
            <h3 className="">React Todo List</h3>
            <Form parent_addTodo={this.addTodoItem} />
            <div className="row">
               <TodoList todos={this.state.todos} ancestor_RemoveTodo={this.removeTodoItem} />
            </div>
         </div>
      );
   }
}

export default App;
