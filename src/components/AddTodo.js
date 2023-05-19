import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title === "") {
            alert("Todo cannot be blank");
        } else {
            addTodo(title);
            document.getElementsByTagName('input')[0].value = "";
        }
    }
    return (
        <div className="container">
            <h1>Add Todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <button onClick={submit} className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

