import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import About from './MyComponents/About';
import backgroundImage from './images/blue web bg.jpeg';


function App() {

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  } 

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc , date) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      date : date
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  


  return (
    <>
    <Router>
      <div style={appStyle} className="app-container">
        <div className='header-space'>
          <Header/>
        </div>
        <div className="container blur-background my-8">
          <Routes>
            <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className='footer-space'>
          <Footer />
        </div>
      </div>
    </Router>
   </>   
    
      
  );
}

export default App;
