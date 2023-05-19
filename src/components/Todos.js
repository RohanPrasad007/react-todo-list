import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  let style = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={style}>
      <h1>Todo List</h1>
      {props.todos.length === 0
        ? "They is no todo"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} onDelete={props.onDelete} key={todo.sNo}></Todo>
            );
          })}
    </div>
  );
}
