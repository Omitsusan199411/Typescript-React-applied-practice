import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // useStateをany型で指定
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
};
