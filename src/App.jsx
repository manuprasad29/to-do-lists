import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "../src/NewTodoForm";
import ListTodo from "./ListTodo";

function App() {
  const [todos, setTodos] = useState(()=>{
    const loacalValue = localStorage.getItem("ITEMS")
    if(loacalValue === null) return []
    return JSON.parse(loacalValue)
  });

  useEffect(() => {
   localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const handleToggle = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 >To do List</h1>
      <ListTodo
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        todos={todos}
      />
    </>
  );
}

export default App;
