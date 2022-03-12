import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo("");
  };

  const inputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        placeholder="Enter a Todo..."
        onChange={inputChangeHandler}
        value={todo}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default Input;
