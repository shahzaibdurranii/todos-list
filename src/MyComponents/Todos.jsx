import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

const Todos = (props) => {
  const myStyle={
    minHeight:"10vh",
    margin:"30px auto"
  }
  return (
      <div className='container' style={myStyle}>
        <h3 className='text-center my-3'>Todos list</h3>
        {props.todos.length===0?"No Todos To displa!":
          props.todos.map((todo)=>{
            return(<>
              <TodoItem key={ todo.sno } todo={todo} onDelete = {props.onDelete}/> <hr/>
             </>)
            
          })
      }
      </div>
  )
}

export default Todos