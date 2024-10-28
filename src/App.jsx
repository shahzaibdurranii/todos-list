import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';

function App() {

  

  const onDelete = (todo) =>{
    console.log('I am onDelete of todo!',todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos , setTodos] = useState([
    {
      sno:0,
      title:'hey i want to go to the market!',
      desc : 'you need to do this '
    },
    {
      sno:1,
      title:'hey i want to go to the mall!',
      desc : 'you need to do this '
    },
    {
      sno:2,
      title:'hey i want to go to the Gym!',
      desc : 'you need to do this '
    }
  ]);

  return (
    <>
      <Header title='Title' searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
    
  );
}

export default App;
