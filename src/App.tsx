import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodosInfo from "./components/TodosInfo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      name: "Arrumar a casa",
      done: true,
    },
    {
      id: 1,
      name: "Ir ao supermercado",
      done: false,
    },
    {
      id: 2,
      name: "Fazer compras",
      done: false,
    },
    {
      id: 3,
      name: "Jogar CS",
      done: true,
    },
    {
      id: 4,
      name: "Jogar CS",
      done: true,
    },
    {
      id: 5,
      name: "Jogar CS",
      done: true,
    },
    {
      id: 6,
      name: "Jogar CS",
      done: true,
    },
  ]);

  const [doneTodos, setDoneTodos] = useState(0);
  const [todoTodos, setTodoTodos] = useState(0);

  const getDoneTodos = () => {
    let counter = 0;

    todos.forEach((todo) => {
      if (todo.done) counter++;
    });

    return counter;
  };

  const getTodoTodos = () => {
    let counter = 0;

    todos.forEach((todo) => {
      if (!todo.done) counter++;
    });

    return counter;
  };

  useEffect(() => {
    setDoneTodos(getDoneTodos());
    setTodoTodos(getTodoTodos());
  }, [todos]);

  return (
    <div id="container">
      <div id="titleBar">
        <p>App de Todo</p>
      </div>

      <div id="content">
        <div id="todos">
          {todos.map((todo) => (
            <Todo id={todo.id} name={todo.name} done={todo.done} />
          ))}
        </div>

        <TodosInfo total={todos.length} done={doneTodos} todo={todoTodos} />
      </div>
    </div>
  );
}

export default App;
