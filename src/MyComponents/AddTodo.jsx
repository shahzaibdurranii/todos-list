import React from 'react'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

const AddTodo = (props) => {

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [date, setDate] = useState('');
  


  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert('Title or Description can not be blank!')
    }else{
      props.addTodo(title , desc , date);
      setTitle('');
      setDesc(''); 
      setDate('') ;

      
    }
    
  }  

  return (
    <div className='container my-3'>
      <h3 className='text-center'>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="tittle" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" className="form-control" onChange={(e)=>{setDesc(e.target.value)}} value={desc} id="desc"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Select Date</label>
          <input 
          type='date'
          className='form-control'
          onChange={(e)=>{setDate(e.target.value)}} 
          value={date} 
          id='date'/>
        </div>
        <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
      </form>
      
    </div>
  )
}

export default AddTodo