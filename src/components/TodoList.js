import React from "react";
import Todo from "./Todo"

function TodoList ({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo => {
        <Todo {...todo} key={todo.id} onClick={() => onTodoClick(todo.id)} />
      })}
    </ul>
  )
}

export default TodoList