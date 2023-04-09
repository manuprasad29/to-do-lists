import React from "react";
import ListItems from "./ListItems";

const ListTodo = ({ handleToggle, handleDelete, todos }) => {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && " No items "}
        {todos.map((todo) => {
          return (
            <ListItems
              {...todo}
              key={todo.id}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ListTodo;
