import React from 'react';

export const TodoList = (props) => {
  console.log(props)
  console.log(props.todos)
  return (
    <div>
    {props.todos.map((newTodo) => {
      return <div key={newTodo.id} onClick={() => props.toggleTodo(newTodo.id)} style={{textDecoration: newTodo.completed ? "line-through" : "none"}}>
        <p key={newTodo.id}>{newTodo.item}</p>
        </div>
    })}
    {/* {props.todos.map((newTodo) => console.log(newTodo.item))} */}
    
    </div>
  )

}