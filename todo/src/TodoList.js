import React from 'react';

export const TodoList = (props) => {
  console.log(props)
  console.log(props.todos)
  return (
    <ul>
    {props.todos.map((newTodo) => {
      return <li key={newTodo.id}>{newTodo.item}</li>
    })}
    </ul>
  )

}