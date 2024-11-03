import React from 'react'

const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <p ><strong>Date:</strong> {todo.date}</p> 
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem