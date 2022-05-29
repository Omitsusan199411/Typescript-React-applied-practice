import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const App = () => {
  // useStateをany型で指定
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
};
