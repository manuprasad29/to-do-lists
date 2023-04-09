import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };

  // function handleToggle  (id,completed) {
  //   setTodos(currentTodos=>{
  //     return currentTodos.map(todo=>{
  //       if(todo.id === id){
  //         return {...todo, completed}
  //       }
  //     })
  //         })

  // };
  const handleToggle = (id,completed) => {
    // console.log(error);
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete =(id)=> {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item" className="">
            New item
          </label>
          <input
            type="text"
            className="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>To do List</h1>
      <ul className="list">
        {todos.length === 0 && " No items "}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleToggle(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
