import React from "react";
import TaskListContextProvider from "../contexts/TodoListContext";
import TaskList from "./TodoList";
import TaskForm from "./TodoForm";
import AOS from "aos"

import "../App.css";
import Header from "./Header";
import Navbar from "./Navbar"
import Footer from "./Footer";
import { Link, Redirect } from 'react-router-dom';

const Todos = () => {
  return (
      
    <TaskListContextProvider>
      <Navbar/>
      <div className="container1">
        <div className="app-wrapper" data-aos="flip-left">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
      <Footer/>
    </TaskListContextProvider>
  );
};
AOS.init({
    duration:1000 
  });
export default Todos