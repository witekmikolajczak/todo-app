import React, { useCallback, useState } from "react";

import Card from "./components/UI/Card/Card";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Text from "./components/UI/Text/Text";

import classes from "./App.module.css";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = (todo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: Math.random(), todo: todo }];
    });
    console.log(todo);
  };

  const updateTodo = () => {};
  const checkTodo = () => {};

  return (
    <Card className={classes.card}>
      <Text title="Todo-List" className={classes.text} />
      <Input onAddTodo={addTodoHandler} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Card>
  );
}

export default App;
