import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./TodoList.module.css";

const TodoList = ({ todo, setTodo }) => {
  const onDeleteTodo = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <Fragment>
      {todo.map((todo) => (
        <div className={classes["todo-list"]} key={todo.id}>
          <div className={classes.wrapper}>
            <p>{todo.todo}</p>
            {console.log(todo.todo)}
            <div className={classes.icons}>
              {/* <FontAwesomeIcon icon={faPen} />
              <FontAwesomeIcon icon={faCheck} /> */}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDeleteTodo(todo)}
                key={todo.id}
              />
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default TodoList;
