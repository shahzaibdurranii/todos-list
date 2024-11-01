import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo) =>{
    console.log('I am onDelete of todo!',todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title , desc)=>{
    console.log('i am adding this todo',title,desc);
    let sno;
    if(todos.length == 0){
      sno = 0;
    }else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title : title,
      desc :desc
    }
    setTodos([...todos , myTodo])
    console.log(myTodo)
  }

  const [todos , setTodos] = useState([]);

  const containerStyle = {
    flex: 1, // Ensures main content takes available space
  };

  return (
    <>
      <Header title='Title' searchBar={true}/>
      <div className='container'>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
