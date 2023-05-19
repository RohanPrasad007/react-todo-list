import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let arr = [];
  if (!localStorage.getItem("todo")) {
    localStorage.setItem("todo", arr);
  } else {
    let storedJson = localStorage.getItem("todo");
    arr = JSON.parse(storedJson);
  }

  const [todos, setTodos] = useState(arr);

  const addTodo = (title) => {
    let sno = todos.length + 1;
    let myTodo = [
      {
        sNo: sno,
        title: title,
      },
    ];
    let newTodos = todos.concat(myTodo);
    setTodos(newTodos);
    newTodos = JSON.stringify(newTodos);
    localStorage.setItem("todo", newTodos);
  };

  const onDelete = (todo) => {
    let newTodos = todos.filter((e) => {
      return e !== todo;
    });
    setTodos(newTodos);
    newTodos = JSON.stringify(newTodos);
    localStorage.setItem("todo", newTodos);
  };

  return (
    <>
      <Header title="Todo list" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
