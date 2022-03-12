import React from "react";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  props.todo.map((todo) => {
    console.log(todo);
  });
  return (
    <div className={classes["todo-list"]}>
      {props.todo.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
