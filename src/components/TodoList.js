import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
   // if (props.todos.length < 1) {
   //    return <p>Add a todo item</p>;
   // }

   const todos = props.todos.map((todo, index) => {
      return (
         <TodoItem key={index} todo={todo} parent_RemoveTodo={props.ancestor_RemoveTodo} />
      );
   });

   return (
      <div className="mt-3 mx-auto col-md-6">
         <ul className="list-group">{todos}</ul>
      </div>
   );
};

export default TodoList;
