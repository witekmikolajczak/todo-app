import React, { useState } from "react";

import Card from "./components/UI/Card/Card";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Text from "./components/UI/Text/Text";

import classes from "./App.module.css";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = (todo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { todo: todo }];
    });
  };

  return (
    <Card className={classes.card}>
      <Text title="Todo-List" className={classes.text} />
      <Input onAddTodo={addTodoHandler} />
      <TodoList todo={todo} />
    </Card>
  );
}

export default App;
