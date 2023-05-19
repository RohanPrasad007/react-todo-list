import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}
