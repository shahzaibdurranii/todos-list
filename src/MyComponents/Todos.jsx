import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

const Todos = (props) => {
  return (
      <div className='container'>
        <h3 className='text-center my-3'>Todos list</h3>
        {props.todos.length===0?"No Todos To displa!":
          props.todos.map((todo)=>{
            return <TodoItem key={ todo.sno } todo={todo} onDelete = {props.onDelete}/>
        })
      }
      </div>
  )
}

export default Todos