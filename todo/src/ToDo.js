import React, { useState, useReducer } from "react";
import { toDoReducer, initialState, ACTIONS } from "./reducers/toDoReducer";

//add a newTodo
//check if completed, and if so put a line through it


const ToDo = (props) => {

  const [todo, setTodo] = useState('');
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const handleChanges = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo } })
    setTodo('')
  }

  return (
    <div className="add-todo">
      <h1>My Todos</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Todo"
        value={todo} //needs to be a value of newTodo
        onChange={handleChanges}
      />
      </form>
      <button onClick={handleSubmit}>Add Item</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO})}>Clear Completed</button>
      
    </div>
  );



}

export default ToDo;
